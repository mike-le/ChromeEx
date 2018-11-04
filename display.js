document.getElementById("display").addEventListener("click", showWords);

var ul = document.createElement("ul");
document.getElementById("dictionary").appendChild(ul);

getValue(function (items) {
    for (var key in items) {
        if (items.hasOwnProperty(key)) {
            var li = document.createElement("li");  
            var span = document.createElement("span");
            li.innerHTML = key + ": " + items[key];
            li.value = key;
            li.className = "row";

            var label = document.createElement("label");
            var input = document.createElement("input");
            input.type = "checkbox";
            input.className = "wordCheckbox";
            label.id = "checkbox";
            
            
            label.appendChild(input);
            li.appendChild(label);
            span.appendChild(li);
            ul.appendChild(span);
        }
    }
}); 

function showWords(){
    event.preventDefault();
    var x = document.getElementById("dictionary");
    if (x.style.opacity != 1) {
        x.style.opacity = 1;
        x.style.minHeight = "200px";
    } else {
        x.style.opacity = 0;
        x.style.minHeight = "0px";
    }
}

function getValue(callback) {
	chrome.storage.sync.get(null, callback);
}