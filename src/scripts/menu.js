const menuCheckbox = document.getElementById('menu-btn')
const burgerMenu = document.querySelector('.nav-links')

menuCheckbox.addEventListener('change', ({ target: { checked } }) => {
    burgerMenu?.classList.toggle("open")
})