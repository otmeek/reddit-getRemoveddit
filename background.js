chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostSuffix: 'reddit.com'},
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

function onPageActionClicked(tab) {
    var url = tab.url
    var urlEnding = url.split('.com')[1];
    var newUrl = 'https://www.removeddit.com' + urlEnding
    chrome.tabs.update({url: newUrl});
};
chrome.pageAction.onClicked.addListener(onPageActionClicked);