// This is the options/url manager for the extension.

var saveUrlList = function() {

    var ta = document.getElementById('urlList');
    var s = document.getElementById('message-saved');

    localStorage.pinurl_list = JSON.stringify(ta.value.split("\n")).replace(/,? ?""/g, '');
    s.style.opacity = 1;
    var i = setInterval(function () {
        s.style.opacity -= .01;
        if (s.style.opaicty == 0) clearInterval(i);
    }, 30);
};

window.onload = function () {
    var ta = document.getElementById('urlList'),
        b = document.getElementById('button-save'),
        v = JSON.parse(localStorage.pinurl_list || '[]');

    ta.value = v.join("\n");

    // Save Action
    b.onclick = function() {
       saveUrlList();
    };
    ta.onchange = function () {
        saveUrlList();
    };

};