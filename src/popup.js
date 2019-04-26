document.getElementById("submit").addEventListener("click", addNewWord);

function addNewWord() {
    event.preventDefault();
    
    var cap = document.getElementById('capCheck').checked;
    var plural = document.getElementById('pluralCheck').checked;
    var fromWord = document.getElementById('fromWord').value;
    var toWord = document.getElementById('toWord').value;
    
    if(!fromWord || !toWord) return false;
    var save = {};  
    save[decapitalize(fromWord)] = decapitalize(toWord);
    if(cap) save[capitalize(fromWord)] = capitalize(toWord);
    if(plural) save[decapitalize(fromWord+'s')] = decapitalize(toWord);
    if(cap && plural) save[capitalize(fromWord+'s')] = capitalize(toWord);
    
    chrome.storage.sync.set(save);
    showSnackBar(fromWord + " -> " + toWord + " added successfully", "#1DDF16");
    return true;
} 
    
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function decapitalize(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
}

function showSnackBar(message, color){
    var x = document.getElementById("snackbar");
    x.style.backgroundColor = color; 
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 2000);
}