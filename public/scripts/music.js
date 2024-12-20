let $ = document
let usernameValue = $.querySelector(".username")
// ls = LocalStorage
const lsUsername = localStorage.getItem("Username")
console.log(lsUsername)
function setUsername (username) {
    usernameValue.innerHTML = username
}
setUsername(lsUsername)