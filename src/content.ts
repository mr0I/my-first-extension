window.onload = () => {
    const button = document.createElement('button');
    button.innerText = chrome.i18n.getMessage('darkModeBtnText');
    button.id = 'darkmode_btn';
    button.addEventListener('click', () => activeDarkMode());

    const input = document.createElement('input');
    input.type = 'checkbox';
    input.id = 'darkmode_settings';
    input.addEventListener('click', () => storeSettings());

    document.getElementById('menu-item-69790').append(button, input, 'Auto apply?');


    (function checkSettings() {
        chrome.storage.local.get(['enabled'], (res) => {
            const result = res.enabled;
            console.log('settings: ', result);
            (document.getElementById('darkmode_settings') as HTMLInputElement).checked = result;
            if (result) {
                activeDarkMode();
            }
        })
    })();
}


function activeDarkMode() {
    (document.querySelector('.main-page-wrapper') as HTMLElement).style.background = 'black';
    alert('Done ;)');
}

function storeSettings() {
    const isEnabled = (document.getElementById('darkmode_settings') as HTMLInputElement).checked;
    const settings = {
        enabled: isEnabled
    }

    chrome.storage.local.set(settings, () => {
        console.log('settings saved :D', settings);
    })
}
