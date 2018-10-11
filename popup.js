// POST the data to the server using XMLHttpRequest
function addNewWord() {
    // Cancel the form submit
    //event.preventDefault();
    alert("here");

    var orgWord = document.getElementById('org').nodeValue;
    var newWord = document.getElementById('new').nodeValue;

    chrome.storage.sync.set({ "word" : "kotoba" }, function(){
        alert('translated' + orgword + '=>' + newWord);
        console.log('Saved: ' + orgWord + '=>' + newWord);
    });

    return false;
}
