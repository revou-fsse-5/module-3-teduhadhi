var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//----------------------------------Events
var recipeButton = document.querySelector("#getRecipeBtn");
var nextRecipeButton = document.querySelector("#nextRecipeBtn");
recipeButton.onclick = onRandomRecipe;
nextRecipeButton.onclick = onRandomRecipe;
//----------------------------------Aynchronous function & data fetch
var container = document.querySelector(".container");
var recipeContainer = document.querySelector(".recipe-container");
var serverMessage = document.querySelector(".server-message");
// async function onRandomRecipe(): Promise<void> {
//   await getData();
//   };
function onRandomRecipe() {
    return __awaiter(this, void 0, void 0, function () {
        var respone, fetchedData, recipeArray, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    wait();
                    return [4 /*yield*/, fetch("https://www.themealdb.com/api/json/v1/1/random.php")];
                case 1:
                    respone = _a.sent();
                    return [4 /*yield*/, respone.json()];
                case 2:
                    fetchedData = _a.sent();
                    recipeArray = fetchedData.meals[0];
                    listRemover();
                    succeed();
                    // makeIngredientList(ingredientsChecker(recipeArray));
                    makeInstructionList(recipeArray.strInstructions);
                    embedData(recipeArray);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.log(error_1);
                    serverMessage.innerText = "Unnable to fetch the data";
                    failed();
                    listRemover();
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
//----------------------------------Try Catch Element Manipulation
var succeed = function () {
    recipeButton.classList.add("display-none");
    serverMessage.classList.add("display-none");
    container.classList.add("animation-stretch");
    recipeContainer.classList.add("animation-fade-in", "display-flex");
};
var failed = function () {
    recipeButton.classList.remove("display-none");
    serverMessage.classList.remove("display-none");
    container.classList.remove("animation-stretch");
    recipeContainer.classList.remove("animation-fade-in", "display-flex");
};
var wait = function () {
    serverMessage.classList.remove("display-none");
    serverMessage.innerText = "please wait...";
};
//----------------------------------Embed Data to Document
var recipeTitle = document.querySelector(".recipe-title");
var recipeCategory = document.querySelector(".recipe-category");
var recipeImage = document.querySelector(".recipe-image");
var youtubeThumbnail = document.querySelector(".youtube-thumb");
var embedData = function (data) {
    recipeTitle.innerText = data.strMeal;
    recipeCategory.innerText = data.strCategory;
    recipeImage.src = data.strMealThumb;
    var youtubeURL = data.strYoutube;
    var youtubeId = youtubeURL.split('watch?v=');
    youtubeThumbnail.src = "https://www.youtube.com/embed/".concat(youtubeId[1]);
};
//----------------------------------Creating Lists
var recipeInstructions = document.querySelector(".recipe-instructions");
var recipeIngredients = document.querySelector(".recipe-ingredients");
var makeInstructionList = function (data) {
    var separateInstructions = data.split(/\r\n/);
    listMaker(separateInstructions, recipeInstructions);
};
var makeIngredientList = function (data) {
    listMaker(data, recipeIngredients);
};
var listMaker = function (array, element) {
    for (var i = 0; i < array.length; i++) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(array[i]);
        node.appendChild(textnode);
        element.appendChild(node);
        listAdded = true;
    }
};
//----------------------------------Removing List
var listAdded = false;
var listRemover = function () {
    if (listAdded) {
        var listArray = document.querySelectorAll('li');
        for (var i = 0; i < listArray.length; i++) {
            var list = document.querySelector('li');
            list.remove();
        }
    }
};
//----------------------------------Checking The Ingredients
var ingredientsChecker = function (data) {
    var ingredientsArray = [];
    for (var i = 1; i < 20; i++) {
        var ingredient = data["strIngredient".concat(i)];
        var measurement = data["strMeasure".concat(i)];
        var measuredIngridient = "".concat(measurement, " of ").concat(ingredient);
        if (ingredient === "") {
            return ingredientsArray;
        }
        ingredientsArray.push(measuredIngridient);
    }
};
