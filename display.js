document.getElementById("display").addEventListener("click", showWords);

var ul = document.createElement("ul");
document.getElementById("dictionary").appendChild(ul);

getValue(function (items) {
    for (var key in items) {
        if (items.hasOwnProperty(key)) {
            var li = document.createElement("li");  
            var span = document.createElement("span");
            var firstCol = document.createElement("span");
            var secondCol = document.createElement("span");

            firstCol.textContent = "" + key;
            secondCol.textContent = "" + items[key];
            firstCol.className = "key";
            secondCol.className = "value";
            //li.innerHTML = key + ": " + items[key];
            li.className = "row";

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
