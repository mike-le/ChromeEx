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
			//contextMenu(node);
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
}

function contextMenu(textNode){
	getValue(null, function (items) {
		for (var key in items){
			if (items[key] == textNode.nodeValue) {
			chrome.contextMenus.create({
				title: "Kotoba: " + key, 
				contexts:["selection"], 
				onclick: alert("test")
			});
			}    
		}
	}); 
}

function getValue(word, callback) {
	chrome.storage.sync.get(word, callback);
}