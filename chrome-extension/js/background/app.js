//
// Extension Starter
// app.js
//

// "Unique" identifier for the extension on the user's system
function getInstanceId() {
  if (!localStorage.hasOwnProperty('instanceId'))
    localStorage.instanceId = parseInt(Date.now() * Math.random(), 10);
  return localStorage.instanceId;
}

// Capture the installation event
chrome.runtime.onInstalled.addListener(function(details) {
	// Open up a window at installation
  if (details.reason === 'install') {
    chrome.windows.create({ url: 'http://localhost/~cameron/example' });
  }
});

// Listen for a message from a pre-permissioned webpage
chrome.runtime.onMessageExternal.addListener(
	function(request, sender, sendResponse) {
		// Do something when a pre-permissioned webpage
		// attempts to communicate with the extension
		alert('*Knock Knock from ' + getInstanceId() + '*');
	}
);
