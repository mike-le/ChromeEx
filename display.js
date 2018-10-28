document.getElementById("list").addEventListener("click", display);

function display() {
    getValue(function (items) {
		var myjson = JSON.stringify(items, null, 2);
		var x = window.open();
		x.document.open();
		x.document.write('<html><body><pre>' + myjson + '</pre></body></html>');
		x.document.close();
	}); 
}

function getValue(callback) {
	chrome.storage.sync.get(null, callback);
}
