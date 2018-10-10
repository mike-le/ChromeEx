// POST the data to the server using XMLHttpRequest
function addNewWord() {
    // Cancel the form submit
    event.preventDefault();

    var orgWord = document.getElementById('org');
    var newWord = document.getElementById('new');

    chrome.storage.sync.set({ orgWord: newWord }, function(){
        //  A data saved callback 
    });
}
