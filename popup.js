document.addEventListener('DOMContentLoaded', function() {
  console.log("Popup loaded");
  document.getElementById('sendMessage').addEventListener('click', function() {
    console.log("Button clicked");
    var port = chrome.runtime.connect();
    port.postMessage({ text: "Hello from Chrome Extension" });
    port.onMessage.addListener(function(response) {
      console.log("Received response: " + response.text);
    });
  });
});