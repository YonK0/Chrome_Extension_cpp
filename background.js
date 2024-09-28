chrome.runtime.onConnect.addListener(function(port) {
  console.log("Connected to popup");
  port.onMessage.addListener(function(msg) {
    console.log("Message received from popup: ", msg);
    var nativePort = chrome.runtime.connectNative('com.example.native');
    console.log("Connected to native messaging host");
    nativePort.postMessage(msg);
    nativePort.onMessage.addListener(function(response) {
      console.log("Response received from native app: ", response);
      port.postMessage(response);
    });
    nativePort.onDisconnect.addListener(function() {
      console.log("Disconnected from native messaging host");
    });
  });
});