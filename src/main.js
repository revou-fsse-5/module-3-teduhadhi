
let container             = document.querySelector(".container");

let recipeButton          = document.querySelector("#getRecipeBtn");
let nextRecipeButton      = document.querySelector("#nextRecipeBtn");
let recipeContainer       = document.querySelector(".recipe-container");

let recipeInstructions    = document.querySelector(".recipe-instructions");
let recipeIngredients     = document.querySelector(".recipe-ingredients");

let listAdded             = false;



recipeButton.onclick        = onRandomRecipe;
nextRecipeButton.onclick    = onRandomRecipe;


async function onRandomRecipe() {
  await getData();
  container.classList.add("animation-stretch");
  recipeContainer.classList.add("animation-fade-in");
  recipeContainer.style     = "display:flex";
  recipeButton.style        = "display:none";
  
  };

const getData = async () =>{
  try {
    const respone     = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const fetchedData = await respone.json();
    const recipeArray = fetchedData.meals[0];

    listRemover();
    makeIngredientList(ingredientsChecker(recipeArray));
    makeInstructionList(recipeArray.strInstructions);
    embedData(recipeArray);

  } catch (error) {
    console.log(error.message);
    recipeTitle.innerText     = error.message;
    listRemover();
  }
}

//----------------------------------Creating Lists
const makeInstructionList = (data) => {
  let separateInstructions  = data.split(/\r\n/);
  listMaker(separateInstructions, recipeInstructions)
}

const makeIngredientList = (data) => {
  listMaker(data, recipeIngredients)
}

const listMaker = (array, element) => {
  for(let i = 0; i < array.length; i++){
    const node      = document.createElement("li");
    const textnode  = document.createTextNode(array[i]);
    node.appendChild(textnode);
    element.appendChild(node);
    listAdded = true;
  } 
}

//----------------------------------Embed Data to Document

let recipeTitle           = document.querySelector(".recipe-title");
let recipeCategory        = document.querySelector(".recipe-category");
let recipeImage           = document.querySelector(".recipe-image");
let youtubeThumbnail      = document.querySelector(".youtube-thumb");


const embedData = (data) => {
  recipeTitle.innerText     = data.strMeal;
  recipeCategory.innerText  = data.strCategory;
  recipeImage.src           = data.strMealThumb;
  let youtubeURL            = data.strYoutube;
  let youtubeId             = youtubeURL.split('watch?v=');
  youtubeThumbnail.src      = `https://www.youtube.com/embed/${youtubeId[1]}`
}

//----------------------------------Removing List
const listRemover = () => {
  if(listAdded){
    let listArray = document.querySelectorAll('li');
    for (let i = 0; i < listArray.length; i++) {
      let list = document.querySelector('li');
      list.remove()
    }
    }
}

//----------------------------------Checking The Ingredients
const ingredientsChecker = (data) => {
  let ingredientsArray = [];
  for (let i = 1; i < 20; i++) {
    let ingredient = data[`strIngredient${i}`];
    let measurement = data[`strMeasure${i}`];
    let measuredIngridient = `${measurement} of ${ingredient}`
    if (ingredient === ""){
      return ingredientsArray;
    }
    ingredientsArray.push(measuredIngridient);

  }
}


