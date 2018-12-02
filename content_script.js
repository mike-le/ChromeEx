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
	var hasWord = searchNode(textNode.innerHTML);

	console.log(key);
	if(hasWord) alert("here");
	console.log("Search: " + hasWord);

	getValue(key, function (word) {
		if(word.hasOwnProperty(key)){
			var regex = new RegExp(key,"gi");
			key = key.replace(regex, word[key]);
			textNode.nodeValue = key;
		}
	}); 
}

function getValue(word, callback) {
	chrome.storage.sync.get(word, callback);
}

function getAll(callback) {
	chrome.storage.sync.get(null, callback);
}

function searchNode(node){
	getAll(function (items) {
		for (var key in items) {
			if(node.indexOf(key) != 1){
				return true;	
			}
		}
	}); 
	return false;
}