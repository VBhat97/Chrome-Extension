chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "movierack.html";
  chrome.tabs.create({ url: newURL });
});