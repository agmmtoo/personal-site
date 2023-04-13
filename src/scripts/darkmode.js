const html = document.documentElement
const darkmodeCheckbox = document.getElementById('darkmode-btn')
window.onload = () => {
    const theme = (() => {
        if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
            return localStorage.getItem("theme");
        }
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            return "dark";
        }
        return "light";
    })();

    if (theme === "light") {
        document.documentElement.classList.remove("dark");
    } else {
        document.documentElement.classList.add("dark");
    }

    darkmodeCheckbox.checked = theme === "dark"
}

darkmodeCheckbox.addEventListener('change', ({ target: { checked } }) => {
    if (checked) {
        localStorage.setItem('theme', 'dark')
        document.documentElement.classList.add("dark");
    } else {
        localStorage.setItem('theme', 'light')
        document.documentElement.classList.remove("dark");
    }
})