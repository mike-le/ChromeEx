document.getElementById("display").addEventListener("click", showWords);

refreshDictionary();

function refreshDictionary(){
    getDictionary(function (items) {
        var ul = document.getElementById("list");
        for (var key in items) {
            if (items.hasOwnProperty(key)) {
                var li = document.createElement("li");  
                var span = document.createElement("span");
                var firstCol = document.createElement("span");
                var secondCol = document.createElement("span");
                
                populateTable(li, firstCol, secondCol, key, items[key]);
                
                var label = document.createElement("label");
                var input = document.createElement("input");
                input.type = "checkbox";
                input.className = "wordCheckbox";
                input.value = key;
                label.id = "checkbox";
                
                label.appendChild(input);
                li.appendChild(firstCol);
                li.appendChild(secondCol);            
                li.appendChild(label);
                span.appendChild(li);
                ul.appendChild(span);
            }
        }
    });
}

function showWords(){
    event.preventDefault();
    var displayButton = document.getElementById("display");
    var x = document.getElementById("dictionary");
    getValue(function (items) {
        if(Object.keys(items).length > 0){
            if (x.style.opacity != 1) {
                x.style.maxHeight = "200px";
                x.style.marginBottom = "5px";
                x.style.opacity = 1;
                displayButton.textContent = "-";
            } else {
                x.style.maxHeight = "0px";
                x.style.marginBottom = "0px";
                x.style.opacity = 0;
                displayButton.textContent = "+";
            }
        }
    }); 
}

function getDictionary(callback) {
	chrome.storage.sync.get(null, callback);
}

function populateTable(li, firstCol, secondCol, key, value){
    firstCol.textContent = key;
    secondCol.textContent = value;
    firstCol.className = "key";
    secondCol.className = "value";
    li.className = "row";
}