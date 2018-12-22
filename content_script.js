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
				var regex = new RegExp("\\b" + word + "\\b","g"); 
				key = key.replace(regex, items[word]);
				textNode.nodeValue = key;	
			}
		}
	}); 
}

function getAll(callback) {
	chrome.storage.sync.get(null, callback);
}