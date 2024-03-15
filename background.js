chrome.commands.onCommand.addListener(function(command) {
  if (command === "toggle-countdown") {
    chrome.tabs.executeScript({
      file: 'script.js'
    });
  }
});

