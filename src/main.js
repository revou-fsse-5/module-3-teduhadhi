const recipe = {
  title: "Spaghetti Carbonara",
  instructions:
    "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};


//split the instructions into multiple strings, then store them into an array.
let separateInstructions =recipe.instructions.split(/\d\.\s/);
let instructionOrders = separateInstructions.length;

// declare a variable to prevent a repetitive list being added.
let addedList = 0;

//add event listener to call an empty function when the selected button is being clicked.
document.querySelector("#getRecipeBtn").addEventListener("click",function onRandomRecipe(){

  //activate the strecth animation by adding the animation attribute.
  document.querySelector(".container").classList.add("animation-stretch");

  //change the display attribute from none to flex.
  document.querySelector(".recipe-container").setAttribute("style", "display:flex");
  document.querySelector("#getRecipeBtn").setAttribute("style", "display:none");

  //add properties to each of the selected class.
  document.querySelector(".recipe-title").innerText = recipe.title;
  document.querySelector(".recipe-image").setAttribute("src", recipe.image);

  //if the list items has not been added yet, add the list items from the array that had been made previously.
  if(addedList<1){
    for(let i = 1 ; i < instructionOrders; i++){
      const node = document.createElement("li");
      const textnode = document.createTextNode(separateInstructions[i]);
      node.appendChild(textnode);
      document.querySelector(".recipe-instructions").appendChild(node)
    }
  }

  //all of the list items has been exported to the html file
  addedList++;
  return addedList;


});