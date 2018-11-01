document.getElementById("remove").addEventListener("click", showWords);

var ul = document.createElement("ul");
document.getElementById("dictionary").appendChild(ul);

getValue(function (items) {
    for (var key in items) {
        if (items.hasOwnProperty(key)) {
            var li = document.createElement("li");  
            li.innerHTML = key + " -> " + items[key];
            ul.appendChild(li);
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