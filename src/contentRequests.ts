const requestSender = new XMLHttpRequest();
requestSender.onreadystatechange = apiHandler;

function apiHandler(res) {
    if (requestSender.readyState === 4 && requestSender.status === 200) {
        console.log(res.target.response);
    }
}

/** on button clicked */
// requestSender.open('GET', 'https://api.github.com/users/peter', false); // sync request
requestSender.open('GET', 'https://api.github.com/users/peter', true); // async request
requestSender.send();