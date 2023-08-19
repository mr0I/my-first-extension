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

