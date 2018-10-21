document.getElementById("submit").addEventListener("click", addNewWord);

function addNewWord() {
    // Cancel the form submit
    event.preventDefault();
    
    var orgWord = document.getElementById('org').value;
    var newWord = document.getElementById('new').value;
    
    var save = {};
    save[decapitalize(orgWord)] = decapitalize(newWord);
    save[capitalize(orgWord)] = decapitalize(newWord);
    save[decapitalize(orgWord+'s')] = decapitalize(newWord);
    save[capitalize(orgWord+'s')] = decapitalize(newWord);

    chrome.storage.sync.set(save);

    return false;
} 

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function decapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}
