const buttonMenu = document.querySelector('img[alt="icone de menu"]');
const sideBar = document.querySelector('.sidebar');
buttonMenu.addEventListener('click', () => {
    sideBar.classList.toggle('active')
})