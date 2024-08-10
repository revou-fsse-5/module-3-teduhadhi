import {Recipe} from "./tryCatchModule";

//----------------------------------Creating Lists
 const recipeInstructions   = document.querySelector(".recipe-instructions") as HTMLOListElement;
const recipeIngredients     = document.querySelector(".recipe-ingredients") as HTMLUListElement;

const makeInstructionList   = (data: string): void => {
  let separateInstructions: string[]  = data.split(/\r\n/);
  listMaker(separateInstructions, recipeInstructions)
}

const makeIngredientList    = (data: string[]): void => {
  listMaker(data, recipeIngredients)
}

const listMaker = (array: string[], element: HTMLElement) => {
  for(let i = 0; i < array.length; i++){
    const node: HTMLLIElement = document.createElement("li");
    const textnode: Text      = document.createTextNode(array[i]);
    node.appendChild(textnode);
    element.appendChild(node);
    listAdded = true;
  } 
}

//----------------------------------Removing List

let listAdded             = false;

const listRemover = (): void => {
  if(listAdded){
    const listArray = document.querySelectorAll('li');
    for (let i = 0; i < listArray.length; i++) {
      let list = document.querySelector('li') as HTMLLIElement;
      list.remove()
    }
  }
}

//----------------------------------Checking The Ingredients

const ingredientsChecker = (data: Recipe): string[] => {
  let ingredientsArray: string[] = [];
  for (let i = 1; i < 20; i++) {
    let ingredient: string          = data[`strIngredient${i}`];
    let measurement: string         = data[`strMeasure${i}`];
    let measuredIngridient: string  = `${measurement} of ${ingredient}`;
    if (ingredient === ""){
      return ingredientsArray;
    }
    ingredientsArray.push(measuredIngridient);
  }
  return ingredientsArray;
}


const list = {
  recipeInstructions,
  recipeIngredients,
  listAdded,
  makeInstructionList,
  makeIngredientList,
  listMaker,
  listRemover,
  ingredientsChecker
}

export default list;