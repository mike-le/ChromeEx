document.getElementById("list").addEventListener("click", display);

function display() {
    chrome.storage.sync.get(null, function(items) {
        var allKeys = Object.keys(items);
        console.log(allKeys);
    });
}
