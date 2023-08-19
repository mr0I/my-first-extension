chrome.runtime.onInstalled.addListener(() => {
    console.log('Extension installed...');
});

chrome.bookmarks.onCreated.addListener(() => {
    alert('Bookmark created :D');
});