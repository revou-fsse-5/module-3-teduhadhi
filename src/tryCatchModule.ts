export interface Recipe {
  strMeal:          string,
  strMealThumb:     string,
  strInstructions:  string,
  strYoutube:       string,
  strCategory:      string,
  strIngredient:    string,
  strMeasure:       string,
  [key: string]:    any
}

const container             = document.querySelector(".container") as HTMLDivElement;
const recipeContainer       = document.querySelector(".recipe-container") as HTMLDivElement;
const serverMessage         = document.querySelector(".server-message") as HTMLParagraphElement

const recipeButton          = document.querySelector("#getRecipeBtn") as HTMLButtonElement;
const nextRecipeButton      = document.querySelector("#nextRecipeBtn") as HTMLButtonElement;

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

const tryCatch = {
  recipeButton,
  nextRecipeButton,
  container,
  serverMessage,
  recipeContainer,
  recipeTitle,
  recipeCategory,
  recipeImage,
  embedData,
  succeed,
  failed,
  wait,
}

export default tryCatch;

