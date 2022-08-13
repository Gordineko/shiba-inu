const burger = document.querySelector('.burger')
const headerNav = document.querySelector('.header__navigation')
function classToggle() {
    burger.classList.toggle('active')
    headerNav.classList.toggle('active')
}
burger.addEventListener('click', classToggle)
