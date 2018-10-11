walk(document.body);

function walk(node) 
{
    //Inspired by https://github.com/panicsteve/cloud-to-butt
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

function handleText(textNode) 
{
	var v = textNode.nodeValue;
	var word;
	chrome.storage.sync.get(v, function(obj){
		word = obj;
	});

	//alert(word);
	console.log("word: " + word);
	console.log("v: " + v);

	if(word != null){
		console.log("We made it!");
		v = v.replace(/\b[v]\b/g, word);
	}

	textNode.nodeValue = v;
}