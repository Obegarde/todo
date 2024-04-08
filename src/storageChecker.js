export function storageChecker(storageKey){
    const storageItem = localStorage.getItem(storageKey);
    if(storageItem){
        return true;
    }else{
        return false;
    }
}