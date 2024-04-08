import { todoCreator } from "./todoCreator.js";
import { storageChecker } from "./storageChecker.js";
import { idCreator } from "./idCreator.js";


let todo1 = todoCreator("Buy groceries", "Milk, eggs, bread", "2024-04-10", "High");
let todo2 = todoCreator("Finish project", "Complete project presentation", "2024-04-15", "Medium");
let todo3 = todoCreator("Call plumber", "Fix the leaking sink", "2024-04-12", "Low");

console.log(storageChecker());