document.getElementById("display").addEventListener("click", showWords);

getValue(function (items) {
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

function showWords(){
    event.preventDefault();
    var x = document.getElementById("dictionary");
    getValue(function (items) {
        if(Object.keys(items).length > 0){
            if (x.style.opacity != 1) {
                x.style.opacity = 1;
                x.style.maxHeight = "200px";
            } else {
                x.style.opacity = 0;
                x.style.maxHeight = "0px";
            }
        }
    }); 
}

function getValue(callback) {
	chrome.storage.sync.get(null, callback);
}

function populateTable(li, firstCol, secondCol, key, value){
    firstCol.textContent = key;
    secondCol.textContent = value;
    firstCol.className = "key";
    secondCol.className = "value";
    li.className = "row";
}