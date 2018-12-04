document.addEventListener("mousedown", function(event){
    var selection = window.getSelection().toString();
    if(selection.match("grape")) {
        chrome.extension.sendRequest({cmd: "create_menu"});
    } else {
        chrome.extension.sendRequest({cmd: "delete_menu"});
    }
}, true); 

walk(document.body);

function walk(node) 
{
	var child, next;
	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) {
	var key = textNode.nodeValue;
	var text = String(key);
	getAll(function (items) {
		for (var word in items) {
			if(text.indexOf(word) !== -1){
				var regex = new RegExp("\\b" + word + "\\b","gi"); //word surrounded by whitespace
				key = key.replace(regex, items[word]);
				textNode.nodeValue = key;	
			}
		}
	}); 
}

function getAll(callback) {
	chrome.storage.sync.get(null, callback);
}