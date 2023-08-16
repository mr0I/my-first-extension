window.onload = () => {
    const button = document.createElement('button');
    button.innerText = 'Dark Mode';
    button.id = 'darkmode_btn';
    button.addEventListener('click', () => activeDarkMode());

    document.getElementById('menu-item-69790').append(button);

}


function activeDarkMode() {
    document.querySelector('.main-page-wrapper').style.background = 'black';
    alert('Done ;)');
}