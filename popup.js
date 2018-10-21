document.getElementById("submit").addEventListener("click", addNewWord);

function addNewWord() {
    // Cancel the form submit
    event.preventDefault();
    
    var orgWord = document.getElementById('org').value;
    var newWord = document.getElementById('new').value;
    var save = {};

    save[orgWord] = newWord;

    if(orgWord[0] == orgWord[0].toUpperCase()){
        orgWord = decapitalizeFirstLetter(orgWord);
        newWord = decapitalizeFirstLetter(newWord);
    } else {
        orgWord = capitalizeFirstLetter(orgWord);
        newWord = capitalizeFirstLetter(newWord);
    }
    
    save[orgWord] = newWord;
    chrome.storage.sync.set(save);

    return false;
} 

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function decapitalizeFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
