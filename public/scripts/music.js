let $ = document
let usernameValue = $.querySelector(".username")
let modeBtn = $.querySelector(".mode")
let darkIcon = $.querySelector(".dark-icon")
let lightIcon = $.querySelector(".light-icon")
let modeFlag = true
const logoutBtn = $.querySelector(".log-out")
const getUsername = localStorage.getItem("username")
function setUsername (username) {
    usernameValue.innerHTML = username
}
setUsername(getUsername)
function removeItem () {
    localStorage.removeItem("username")
}
logoutBtn.addEventListener("click", function () {
    removeItem()
    window.location.href = "./index.html"
})
modeBtn.addEventListener("click", function () {
    if (modeFlag) {
        darkIcon.classList.toggle("hidden")
        lightIcon.classList.toggle("hidden")
        modeFlag = false
        localStorage.setItem("mode", "light")
        document.body.classList.remove("dark")
    }else {
        darkIcon.classList.toggle("hidden")
        lightIcon.classList.toggle("hidden")
        modeFlag = true
        localStorage.setItem("mode", "dark")
        document.body.classList.add("dark")
    }
})
window.addEventListener("load", function () {
    let getMode = localStorage.getItem("mode")
    if (getMode === "light") {
        modeFlag = false
        document.body.classList.remove("dark")
    }else {
        modeFlag = true
        document.body.classList.add("dark")
    }
})