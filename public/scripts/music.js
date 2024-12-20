let $ = document
let usernameValue = $.querySelector(".username")
const logoutBtn = $.querySelector(".log-out")
const getUsername = localStorage.getItem("Username")
function setUsername (username) {
    usernameValue.innerHTML = username
}
function removeItem () {
    localStorage.removeItem("Username")
}
setUsername(getUsername)
logoutBtn.addEventListener("click", function () {
    removeItem()
    window.location.href = "./index.html"
})