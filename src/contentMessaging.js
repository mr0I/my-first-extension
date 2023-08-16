window.onload = async () => {
    testMessage();
};


function testMessage() {
    chrome.runtime.sendMessage(
        { payload: 'message from content.' },
        () => console.log(2 + 22)
    );
}

chrome.runtime.onMessage.addListener((req, sender, callback) => {
    // also should sanitize input

    console.log('req ', req);
    console.log('sender ', sender);
    console.log('callback ', callback());
})