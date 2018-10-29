document.getElementById("list").addEventListener("click", display);

function display() {
	event.preventDefault();
    getValue(function (items) {
		var myjson = JSON.stringify(items, null, 2);
		window.open('about:blank').document.body.innerText += myjson;
	}); 
}

function getValue(callback) {
	chrome.storage.sync.get(null, callback);
}
