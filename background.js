chrome.extension.onRequest.addListener(
    function (request, sender, sendResponse) {
        // Get the array of urls from localStorage.
        chrome.storage.sync.get('pinurl_list', function (data) {
            var pinurls = JSON.parse(data.pinurl_list || '[]');
            for (var i in pinurls) {
                // Go to the next item if this isn't a "direct" property of pinurls.
                if (!pinurls.hasOwnProperty(i) || pinurls[i] == '')  continue;
                // If this item matches the url then pin the tab and stop running.
                if (!!sender.tab.url.match(pinurls[i])) {
                    chrome.tabs.update(sender.tab.id, {pinned: true});
                    break;
                }
            }
            // Send the response for cleanup...hopefully this prevents Chrome memory leaks, but that's up to Chrome devs, not us here.
            sendResponse(sender.tab);
        });
    }
);