document.getElementById("list").addEventListener("click", display);

function display() {
    getValue(function (items) {
		var allKeys = Object.keys(items);
		alert(allKeys);
	}); 
}

function getValue(callback) {
	chrome.storage.sync.get(null, callback);
}
