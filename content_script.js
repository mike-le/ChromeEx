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

	getValue(key, function (word) {
		if(word.hasOwnProperty(key)){
			var regex = new RegExp(key,"gi");
			key = key.replace(regex, word[key]);
			textNode.nodeValue = key;
		}
	}); 
	contextMenu(textNode);
}

function contextMenu(textNode){
	var value = textNode.value;
	getValue(null, function (items) {
		for (var key in items){
			if (items[key] == value) {
			alert("meg");
			chrome.contextMenus.create({
				title: "Kotoba: " + key, 
				contexts:["selection"]
			});
			}    
		}
	}); 
}

function getValue(word, callback) {
	chrome.storage.sync.get(word, callback);
}