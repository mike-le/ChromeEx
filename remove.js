document.getElementById("remove").addEventListener("click", deleteWords);

function deleteWords(){
    var checkedValue = null; 
    var inputElements = document.getElementsByClassName('wordCheckbox');
    for(var i=0; inputElements[i]; i++){
        if(inputElements[i].checked){
            checkedValue.push(inputElements[i].value);
        }
    }

    getValue(function (items) {
        for (var key in items) {
            if (items.hasOwnProperty(key) && checkedValue.indexOf(key) != -1) {
                //insert remove logic
            }
        }
    }); 

}

function getValue(word, callback) {
	chrome.storage.sync.get(word, callback);
}