document.getElementById("remove").addEventListener("click", showWords);

var ul = document.createElement("ul");
document.getElementById("dictionary").appendChild(ul);

getValue(function (items) {
    for (var key in items) {
        if (items.hasOwnProperty(key)) {
            var li = document.createElement("li");  
            var span = document.createElement("span");
            li.innerHTML = key + ": " + items[key];
            li.className = "row";

            var label = document.createElement("label");
            var input = document.createElement("input");
            input.type = "checkbox";
            input.className = "checkbox";
            
            
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
    if (x.style.display != "block") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function getValue(callback) {
	chrome.storage.sync.get(null, callback);
}