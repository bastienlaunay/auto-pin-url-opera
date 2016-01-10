// Auto Pin Url  inject.js
// Author   Bastien Launay <gmail:bastien.launay>
// Version  0.1
// Date     2016.01.09

// Send a request to the extension's background_page on each page load.
// The only reason we can't just analyze the url here is
// that we can't access chrome.tabs from a content_script.
chrome.extension.sendRequest({});
