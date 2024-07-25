const recipe = {
  title: "Spaghetti Carbonara",
  instructions:
    "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.",
  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

document.querySelector("#getRecipeBtn").addEventListener("click",function(){
// alert('button activated');
document.querySelector(".recipe-title").innerText = recipe.title;
document.querySelector(".recipe-image").setAttribute("src", recipe.image);
document.querySelector(".recipe-instruction").innerText = recipe.instructions;
});