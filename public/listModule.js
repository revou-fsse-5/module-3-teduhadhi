//----------------------------------Creating Lists
const recipeInstructions = document.querySelector(".recipe-instructions");
const recipeIngredients = document.querySelector(".recipe-ingredients");
const makeInstructionList = (data) => {
    let separateInstructions = data.split(/\r\n/);
    listMaker(separateInstructions, recipeInstructions);
};
const makeIngredientList = (data) => {
    listMaker(data, recipeIngredients);
};
const listMaker = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        const node = document.createElement("li");
        const textnode = document.createTextNode(array[i]);
        node.appendChild(textnode);
        element.appendChild(node);
        listAdded = true;
    }
};
//----------------------------------Removing List
let listAdded = false;
const listRemover = () => {
    if (listAdded) {
        const listArray = document.querySelectorAll('li');
        for (let i = 0; i < listArray.length; i++) {
            let list = document.querySelector('li');
            list.remove();
        }
    }
};
//----------------------------------Checking The Ingredients
const ingredientsChecker = (data) => {
    let ingredientsArray = [];
    for (let i = 1; i < 20; i++) {
        let ingredient = data[`strIngredient${i}`];
        let measurement = data[`strMeasure${i}`];
        let measuredIngridient = `${measurement} of ${ingredient}`;
        if (ingredient === "") {
            return ingredientsArray;
        }
        ingredientsArray.push(measuredIngridient);
    }
    return ingredientsArray;
};
const list = {
    recipeInstructions,
    recipeIngredients,
    listAdded,
    makeInstructionList,
    makeIngredientList,
    listMaker,
    listRemover,
    ingredientsChecker
};
export default list;
