import { storageChecker } from "./storageChecker.js";

export function idCreator(){
        let idSuccess = false;
        let tempId;
        let createdIds = [];
        while (!idSuccess) {
            let idCount = 0;
            tempId = Math.floor(Math.random() * 100000);
            for(let i = 0; i < createdIds.length; i++){
                if(createdIds[i] === tempId){
                    idCount++;
                }
            }
            if(idCount === 0){
                createdIds.push(tempId);
                idSuccess = true;
            }else{
                break;
            }
        }
       
       
        return tempId;
}