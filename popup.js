document.getElementById("submit").addEventListener("click", addNewWord);

function addNewWord() {
    event.preventDefault();
    
    var orgWord = document.getElementById('org').value;
    var newWord = document.getElementById('new').value;
    
    var save = {};
    save[decapitalize(orgWord)] = decapitalize(newWord);
    save[capitalize(orgWord)] = capitalize(newWord);
    save[decapitalize(orgWord+'s')] = decapitalize(newWord);
    save[capitalize(orgWord+'s')] = capitalize(newWord);

    chrome.storage.sync.set(save);
    close();
    return false;
} 

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function decapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
