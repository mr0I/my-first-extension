setTimeout(() => {
    chrome.runtime.sendMessage(
        { payload: 'message from content.' },
        (res) => console.log(res)
    );
}, 300);

chrome.runtime.onMessage.addListener((req, sender, callback) => {
    // also  should sanitize input
    console.log('req ', req);
    console.log('sender ', sender);
    console.log('callback ', callback());
})