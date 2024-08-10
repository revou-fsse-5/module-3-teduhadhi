const container = document.querySelector(".container");
const recipeContainer = document.querySelector(".recipe-container");
const serverMessage = document.querySelector(".server-message");
const recipeButton = document.querySelector("#getRecipeBtn");
const nextRecipeButton = document.querySelector("#nextRecipeBtn");
//----------------------------------Try Catch Element Manipulation
const succeed = () => {
    recipeButton.classList.add("display-none");
    serverMessage.classList.add("display-none");
    container.classList.add("animation-stretch");
    recipeContainer.classList.add("animation-fade-in", "display-flex");
};
const failed = () => {
    recipeButton.classList.remove("display-none");
    serverMessage.classList.remove("display-none");
    container.classList.remove("animation-stretch");
    recipeContainer.classList.remove("animation-fade-in", "display-flex");
};
const wait = () => {
    serverMessage.classList.remove("display-none");
    serverMessage.innerText = "please wait...";
};
//----------------------------------Embed Data to Document
const recipeTitle = document.querySelector(".recipe-title");
const recipeCategory = document.querySelector(".recipe-category");
const recipeImage = document.querySelector(".recipe-image");
const youtubeThumbnail = document.querySelector(".youtube-thumb");
const embedData = (data) => {
    recipeTitle.innerText = data.strMeal;
    recipeCategory.innerText = data.strCategory;
    recipeImage.src = data.strMealThumb;
    let youtubeURL = data.strYoutube;
    let youtubeId = youtubeURL.split('watch?v=');
    youtubeThumbnail.src = `https://www.youtube.com/embed/${youtubeId[1]}`;
};
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
};
export default tryCatch;
