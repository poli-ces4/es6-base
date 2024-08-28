import Animal from "./Animal.js";
import theme, { validationToken, API_KEY } from "./helpers.js";
//import theme, * as Util from "./helpers.js";

const tigre = new Animal("Tigre");
console.log(tigre.message());
console.log(validationToken());
console.log(API_KEY);
