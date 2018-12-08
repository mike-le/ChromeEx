document.getElementById("submit").addEventListener("click", addNewWord);

function addNewWord() {
    event.preventDefault();
    
    var cap = document.getElementById('cap').checked;
    var plural = document.getElementById('plu').checked;
    var orgWord = document.getElementById('org').value;
    var newWord = document.getElementById('new').value;
    
    if(!orgWord || !newWord) return false;
    var save = {};  
    save[decapitalize(orgWord)] = decapitalize(newWord);
    if(plural) save[capitalize(orgWord)] = capitalize(newWord);
    if(cap) save[decapitalize(orgWord+'s')] = decapitalize(newWord);
    if(cap && plural) save[capitalize(orgWord+'s')] = capitalize(newWord);

    chrome.storage.sync.set(save);
    showSnackBar(orgWord + " -> " + newWord + " added successfully");
    return true;
} 
    
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function decapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function showSnackBar(message){
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}