function getword(info,tab) {
    console.log("Word " + info.selectionText + " was clicked.");
    chrome.tabs.create({  
      url: "http://www.google.com/search?q=" + info.selectionText
    });
  }

/*
getValue(function (items) {
  for (var key in items){
    if (items[key] == value) {
      chrome.contextMenus.create({
        title: "Kotoba: " + key, 
        contexts:["selection"], 
        onclick: getword
      });
    }    
  }
}); 

function getValue(callback) {
  chrome.storage.sync.get(null, callback);
}*/