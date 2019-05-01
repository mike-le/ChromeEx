document.getElementById("remove").addEventListener("click", deleteWords);

function deleteWords(){
    var checkedValue = []; 
    var inputElements = document.getElementsByClassName('wordCheckbox');
    for(var i=0; inputElements[i]; i++){
        if(inputElements[i].checked){
            checkedValue.push(inputElements[i].value);
        }
    }

    removeValue(checkedValue, function (items){
        getValue(function (items) {
            $.each(items, function(index, value){
            });
        }); 
    });

    var plural = checkValue.length > 1 ? "s" : "";
    showSnackBar(checkedValue.length + " word" + plural + " removed successfully", "#F73A3A");
    return true;
}

function getValue(callback) {
	chrome.storage.sync.get(callback);
}

function removeValue(selected, callback){
    chrome.storage.sync.remove(selected, callback);
}

