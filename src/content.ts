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

            // chrome.tabs.query({
            //     active: true,
            //     currentWindow: true
            // }, (res) => {
            //     console.log('tabs ', res);
            // })
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

const showModal = () => {
    const modal = document.createElement("dialog");
    modal.setAttribute(
        "style", `
height:450px;
border: none;
top:150px;
border-radius:20px;
background-color:white;
position: fixed; box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
`
    );
    modal.innerHTML = `<iframe id="popup-content"; style="height:100%"></iframe>
<div style="position:absolute; top:0px; left:5px;">
<button style="padding: 8px 12px; font-size: 16px; border: none; border-radius: 20px;">x</button>
</div>`;
    document.body.appendChild(modal);
    const dialog = document.querySelector("dialog");
    dialog.showModal();
    const iframe = document.getElementById("popup-content");
    iframe.src = chrome.extension.getURL("index.html");
    iframe.frameBorder = 0;
    dialog.querySelector("button").addEventListener("click", () => {
        dialog.close();
    });
}
