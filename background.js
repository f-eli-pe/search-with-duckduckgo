function searchduckduckgo(info) {
  var searchstring = info.selectionText;
  chrome.tabs.create({
    url: "https://duckduckgo.com/?q=" + encodeURIComponent(searchstring),
  });
}

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: 'Search DuckDuckGo for "%s"',
    contexts: ["selection"],
    id: "SearchWithDuckDuckGo",
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  searchduckduckgo(info);
});
