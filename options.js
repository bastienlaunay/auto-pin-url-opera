// This is the options/url manager for the extension.

var saveUrlList = function () {

    var ta = document.getElementById('urlList');
    var s = document.getElementById('message-saved'),
        newUrlList = JSON.stringify(ta.value.split("\n")).replace(/,? ?""/g, '');

    chrome.storage.sync.set({'pinurl_list': newUrlList}, function () {
        s.style.opacity = 1;
        var i = setInterval(function () {
            s.style.opacity -= .01;
            if (s.style.opacity == 0) clearInterval(i);
        }, 30);
    });
};

window.onload = function () {
    chrome.storage.sync.get('pinurl_list', function (data) {

        var ta = document.getElementById('urlList'),
            b = document.getElementById('button-save'),
            urlList = data.pinurl_list,
            v = JSON.parse(urlList || '[]');

        ta.value = v.join("\n");

        // Save Action
        b.onclick = function () {
            saveUrlList();
        };
        ta.onchange = function () {
            saveUrlList();
        };
    });

};