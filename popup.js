// POST the data to the server using XMLHttpRequest
document.getElementById("submit").addEventListener("click", addNewWord);

function addNewWord() {
    // Cancel the form submit
    event.preventDefault();
    
    var orgWord = document.getElementById('org').value;
    var newWord = document.getElementById('new').value;

    alert(orgWord);
    alert(newWord);

    chrome.storage.sync.set({ [orgWord] : [newWord] }, function(){
        alert('translated');
        console.log('Saved: ' + orgWord + '=>' + newWord);
    });

    return false;
} 
/*
document.addEventListener('DOMContentLoaded', function() {
        var link = document.getElementById('submit');
        link.addEventListener('click', function() {
            // Cancel the form submit
        event.preventDefault();
        alert("here");

        var orgWord = document.getElementById('org').nodeValue;
        var newWord = document.getElementById('new').nodeValue;

        chrome.storage.sync.set({ "word" : "kotoba" }, function(){
            alert('translated' + orgword + '=>' + newWord);
            console.log('Saved: ' + orgWord + '=>' + newWord);
        });

        return false;
    });
});*/
