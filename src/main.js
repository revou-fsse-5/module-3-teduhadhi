
let container             = document.querySelector(".container");
let recipeTitle           = document.querySelector(".recipe-title");
let recipeButton          = document.querySelector("#getRecipeBtn");
let nextRecipeButton      = document.querySelector("#nextRecipeBtn");
let recipeContainer       = document.querySelector(".recipe-container");
let recipeImage           = document.querySelector(".recipe-image");
let recipeInstructions    = document.querySelector(".recipe-instructions");
let youtubeThumbnail      = document.querySelector(".youtube-thumb");
let listAdded             = false;



recipeButton.onclick      = onRandomRecipe;
nextRecipeButton.onclick  = onRandomRecipe;


async function onRandomRecipe() {
  await getData();
  container.classList.add("animation-stretch");
  recipeContainer.classList.add("animation-fade-in");
  recipeContainer.style     = "display:flex";
  recipeButton.style        = "display:none";
  
  };

const getData = async () =>{
  try {
    const respone = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const fetchedData = await respone.json();
    const recipeArray = fetchedData.meals[0];
    // console.log(recipeArray.strInstructions);
    makeInstructionList(recipeArray.strInstructions);
    embedData(recipeArray);
    await youtubeEmbed(recipeArray);
    // throw new Error(error);

  } catch (error) {
    console.log(error.message);
    recipeTitle.innerText     = error.message;
    listRemover();
  }
}

const makeInstructionList = (recipe) => {
  let separateInstructions  = recipe.split(/\r\n/);
  let instructionOrders     = separateInstructions.length;
  listRemover();

    for(let i = 0; i < instructionOrders; i++){
      const node      = document.createElement("li");
      const textnode  = document.createTextNode(separateInstructions[i]);
      node.appendChild(textnode);
      recipeInstructions.appendChild(node);
      listAdded = true;
    } 
}

const embedData = (recipe) => {
  recipeTitle.innerText     = recipe.strMeal;
  recipeImage.src           = recipe.strMealThumb;
}


const listRemover = () => {
  if(listAdded){
    let listArray = document.querySelectorAll('li');
    for (let i = 0; i < listArray.length; i++) {
      let list = document.querySelector('li');
      list.remove()
    }
    }
}

const youtubeEmbed = (data) => {
  let youtubeURL = data.strYoutube;
  console.log(youtubeURL);
  let youtubeId = youtubeURL.split('watch?v=');
  youtubeThumbnail.src      = `https://www.youtube.com/embed/${youtubeId[1]}`
}
