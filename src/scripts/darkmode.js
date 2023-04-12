const html = document.documentElement
const darkmodeCheckbox = document.getElementById('darkmode-btn')

darkmodeCheckbox.addEventListener('change', ({ target: { checked } }) => {
    if (checked) html.classList.remove('dark')
    else html.classList.add('dark')
})