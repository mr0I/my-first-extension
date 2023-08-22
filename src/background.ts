/** do not use global variables here */

chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed...');
});

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmark created :D');
});

chrome.action.onClicked.addListener((tab) => {
    console.log(tab);

    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"'
    })
});

chrome.bookmarks.onMoved.addListener(() => {
    alert('Bookmark moved :D');

    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(
            tabs[0].id,
            { name: 'Ali' },
            (res) => console.log('background_callback')
        );
    });
});

chrome.runtime.onMessage.addListener((req, sender, callback) => {
    // also should sanitize input
    console.log('req ', req);
    console.log('sender ', sender);
    console.log('callback ', callback('hellooooooo'));
    console.log('errors ', chrome.runtime.lastError);
})

chrome.tabs.onActivated.addListener(function (activeInfo) {
    chrome.tabs.get(activeInfo.tabId, function (tab) {
	   // **
    });
});

function _clearLocalStorage() {
    chrome.storage.local.clear(function () {
        if (chrome.runtime.lastError) {
            console.error('Storage not cleared! ', error);
            return;
        }
        console.info('Storage cleared.');
    });
    return;
}