const recipe = {
  title: "Spaghetti Carbonara",
  instructions:
    "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};


let separateInstructions  = recipe.instructions.split(/\d\.\s/);
let instructionOrders     = separateInstructions.length;

console.log(separateInstructions);

// let addedList             = 0;

let container             = document.querySelector(".container");
let recipeTitle           = document.querySelector(".recipe-title");
let recipeButton          = document.querySelector("#getRecipeBtn");
let recipeContainer       = document.querySelector(".recipe-container");
let recipeImage           = document.querySelector(".recipe-image");
let recipeInstructions    = document.querySelector(".recipe-instructions");

recipeButton.onclick = onRandomRecipe;

function onRandomRecipe(){

  container.classList.add("animation-stretch");
  recipeContainer.classList.add("animation-fade-in");
  recipeContainer.style     = "display:flex";
  recipeButton.style        = "display:none";
  recipeTitle.innerText     = recipe.title;
  recipeImage.src           = recipe.image;
  recipeImage.style.width   = "200px";


  // if(addedList < 1){
    for(let i = 1; i < instructionOrders; i++){
      const node      = document.createElement("li");
      const textnode  = document.createTextNode(separateInstructions[i]);
      node.appendChild(textnode);
      recipeInstructions.appendChild(node)
    }

  // };
  // addedList++;
  // return addedList;
  };