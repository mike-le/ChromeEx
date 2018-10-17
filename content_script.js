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
	//alert(v);
	var word;

	getValue(v, function (value) {word = value}); 

	console.log("word: " + word);
	console.log("v: " + v);

	if(word != null){
		console.log("We made it!");
		v = v.replace(/\b[v]\b/g, word);
	}

	textNode.nodeValue = v;
}

function getValue(v, callback) {
	chrome.storage.sync.get(v, callback);
  }