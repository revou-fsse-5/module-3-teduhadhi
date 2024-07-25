const recipe = {
  title: "Spaghetti Carbonara",
  instructions:
    "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};


//split the instructions into multiple strings, then store them into an array.
let separateInstructions  = recipe.instructions.split(/\d\.\s/);
let instructionOrders     = separateInstructions.length;

// declare a variable to prevent a repetitive list being added.
// let addedList             = 0;

//declare every each of the selected element into variables.
let container             = document.querySelector(".container");
let recipeTitle           = document.querySelector(".recipe-title");
let recipeButton          = document.querySelector("#getRecipeBtn");
let recipeContainer       = document.querySelector(".recipe-container");
let recipeImage           = document.querySelector(".recipe-image");
let recipeInstructions    = document.querySelector(".recipe-instructions");


//add event listener to call an the onRandomRecipe function when the selected button is being clicked.
recipeButton.onclick = onRandomRecipe;

function onRandomRecipe(){

  //activate the strecth and fadein animation by adding the animation properties to each of the selected element.
  container.classList.add("animation-stretch");
  recipeContainer.classList.add("animation-fade-in");

  //change the display attribute for each element.
  recipeContainer.style     = "display:flex";
  recipeButton.style        = "display:none";

  //add properties to each of the selected class.
  recipeTitle.innerText     = recipe.title;
  recipeImage.src           = recipe.image;
  recipeImage.style.width   = "200px";

  //if the list items has not been added yet, add the list items from the array that had been made previously.
  if(addedList < 1){
    for(let i = 1; i < instructionOrders; i++){
      const node      = document.createElement("li");
      const textnode  = document.createTextNode(separateInstructions[i]);
      node.appendChild(textnode);
      recipeInstructions.appendChild(node)
    }
  };

  //mark for all of the list items has been exported to the html file
  // addedList++;
  // return addedList;
  };