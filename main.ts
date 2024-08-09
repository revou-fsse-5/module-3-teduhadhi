interface Recipe {
  strMeal:          string,
  strMealThumb:     string,
  strInstructions:  string,
  strYoutube:       string,
  strCategory:      string,
  strIngredient:    string,
  strMeasure:       string,
  [key: string]:    any
}

//----------------------------------Events

const recipeButton          = document.querySelector("#getRecipeBtn") as HTMLButtonElement;
const nextRecipeButton      = document.querySelector("#nextRecipeBtn") as HTMLButtonElement;

recipeButton.onclick        = onRandomRecipe;
nextRecipeButton.onclick    = onRandomRecipe;

//----------------------------------Aynchronous function & data fetch

const container             = document.querySelector(".container") as HTMLDivElement;
const recipeContainer       = document.querySelector(".recipe-container") as HTMLDivElement;
const serverMessage         = document.querySelector(".server-message") as HTMLParagraphElement


async function onRandomRecipe(): Promise<void> {
  try {
    wait();
    const respone: Response     = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const fetchedData           = await respone.json();
    const recipeArray: Recipe   = fetchedData.meals[0];

    listRemover();
    succeed();

    makeIngredientList(ingredientsChecker(recipeArray));
    makeInstructionList(recipeArray.strInstructions);
    embedData(recipeArray);

  } catch (error) {
    console.log(error);
    serverMessage.innerText     = "Unnable to fetch the data";

    failed();
    listRemover();
  }
}

//----------------------------------Try Catch Element Manipulation

const succeed = (): void =>{
  recipeButton.classList.add("display-none");
  serverMessage.classList.add("display-none");
  container.classList.add("animation-stretch");
  recipeContainer.classList.add("animation-fade-in","display-flex");
}

const failed = (): void => {
  recipeButton.classList.remove("display-none");
  serverMessage.classList.remove("display-none");
  container.classList.remove("animation-stretch");
  recipeContainer.classList.remove("animation-fade-in","display-flex");
}

const wait = (): void => {
  serverMessage.classList.remove("display-none");
  serverMessage.innerText     = "please wait...";
}

//----------------------------------Embed Data to Document

const recipeTitle           = document.querySelector(".recipe-title") as HTMLHeadElement;
const recipeCategory        = document.querySelector(".recipe-category") as HTMLHeadElement;
const recipeImage           = document.querySelector(".recipe-image") as HTMLImageElement;
const youtubeThumbnail      = document.querySelector(".youtube-thumb") as HTMLIFrameElement;


const embedData = (data: Recipe) => {
  recipeTitle.innerText     = data.strMeal;
  recipeCategory.innerText  = data.strCategory;
  recipeImage.src           = data.strMealThumb;
  let youtubeURL: string    = data.strYoutube;
  let youtubeId: string[]   = youtubeURL.split('watch?v=');
  youtubeThumbnail.src      = `https://www.youtube.com/embed/${youtubeId[1]}`
}

//----------------------------------Creating Lists

const recipeInstructions    = document.querySelector(".recipe-instructions") as HTMLOListElement;
const recipeIngredients     = document.querySelector(".recipe-ingredients") as HTMLUListElement;

const makeInstructionList   = (data: string): void => {
  let separateInstructions: string[]  = data.split(/\r\n/);
  listMaker(separateInstructions, recipeInstructions)
}

const makeIngredientList    = (data: string[]): void => {
  listMaker(data, recipeIngredients)
}

const listMaker = (array: string[], element: HTMLElement) => {
  for(let i = 0; i < array.length; i++){
    const node: HTMLLIElement = document.createElement("li");
    const textnode: Text      = document.createTextNode(array[i]);
    node.appendChild(textnode);
    element.appendChild(node);
    listAdded = true;
  } 
}

//----------------------------------Removing List

let listAdded             = false;

const listRemover = (): void => {
  if(listAdded){
    const listArray = document.querySelectorAll('li');
    for (let i = 0; i < listArray.length; i++) {
      let list = document.querySelector('li') as HTMLLIElement;
      list.remove()
    }
    }
}

//----------------------------------Checking The Ingredients

const ingredientsChecker = (data: Recipe): string[] => {
  let ingredientsArray: string[] = [];
  for (let i = 1; i < 20; i++) {
    let ingredient: string          = data[`strIngredient${i}`];
    let measurement: string         = data[`strMeasure${i}`];
    let measuredIngridient: string  = `${measurement} of ${ingredient}`;
    if (ingredient === ""){
      return ingredientsArray;
    }
    ingredientsArray.push(measuredIngridient);
  }
  return ingredientsArray;
}


