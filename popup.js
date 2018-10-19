document.getElementById("submit").addEventListener("click", addNewWord);

function addNewWord() {
    // Cancel the form submit
    event.preventDefault();
    
    var orgWord = document.getElementById('org').value;
    var newWord = document.getElementById('new').value;

    var save = {};
    save[orgWord] = newWord;

    chrome.storage.sync.set(save);

    return false;
} 
