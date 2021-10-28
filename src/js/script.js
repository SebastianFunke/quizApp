function saveArrayToLocalStorage(key, array) { //With this Function you are able to save Arrays in local Storage
    localStorage.setItem(key, JSON.stringify(array)); //This line compile an Array into JSON witch is saved on localstorage
}

function loadArrayFromLocalStorage(key) { //With this Function you are able to load an Array from local Storage
    return JSON.parse(localStorage.getItem(key)); //This line reads a JSON from local Storage and compiles it into an Array
}