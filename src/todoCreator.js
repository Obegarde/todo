import { idCreator } from "./idCreator.js";



export function todoCreator(argTitle, argDescription, argDueDate,argPriority){
    let title = argTitle;
    let description = argDescription;
    let dueDate = argDueDate;
    let priority = argPriority;
    const creationDate = Date.now();
    const id = idCreator();
    /* 1: Not Started 2:Working 3:Completed */
    let status = 1;
    let todoObject ={
        title,
        description,
        dueDate,
        creationDate,
        priority,
        status,
        id,
    };
  


    localStorage.setItem(id,JSON.stringify(todoObject));
    return todoObject;
}