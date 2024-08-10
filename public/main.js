import list from "./listModule.js";
import tryCatch from "./tryCatchModule.js";
//----------------------------------Events
tryCatch.recipeButton.onclick = onRandomRecipe;
tryCatch.nextRecipeButton.onclick = onRandomRecipe;
//----------------------------------Aynchronous function & data fetch
async function onRandomRecipe() {
    try {
        tryCatch.wait();
        const respone = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
        const fetchedData = await respone.json();
        const recipeArray = fetchedData.meals[0];
        tryCatch.succeed();
        list.listRemover();
        list.makeIngredientList(list.ingredientsChecker(recipeArray));
        list.makeInstructionList(recipeArray.strInstructions);
        tryCatch.embedData(recipeArray);
    }
    catch (error) {
        console.log(error);
        tryCatch.serverMessage.innerText = "Unnable to fetch the data";
        tryCatch.failed();
        list.listRemover();
    }
}
