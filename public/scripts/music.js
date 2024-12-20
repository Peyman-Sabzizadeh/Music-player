let $ = document
let usernameValue = $.querySelector(".username")
const getUsername = localStorage.getItem("Username")
function setUsername (username) {
    usernameValue.innerHTML = username
}
setUsername(getUsername)