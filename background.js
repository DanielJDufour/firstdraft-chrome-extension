console.log("starting background.js");

/*
chrome.browserAction.onClicked.addListener(function (tab) {
    // ...if it matches, send a message specifying a callback too
    chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
});
*/

/*
setTimeout(function(){

    chrome.tabs.executeScript({
        code: "window.document.documentElement.textContent"
    }, function(x){t=x;});

}, 2000);
*/

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete') {
        chrome.tabs.executeScript({
            code: "window.document.documentElement.textContent"
        }, function(x){
            locations = extract_locations(x);
            console.log("got locations", locations);
            // # Make a post request of locations to First Draft GIS and update response in popup.html
        });
    }
})
