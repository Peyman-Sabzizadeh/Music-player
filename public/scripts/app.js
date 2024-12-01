let $ = document

const signupBtn = $.querySelector(".signup-btn")
const loginBtn = $.querySelector(".login-btn")
// console.log(usernameInput,passwordInput,signupBtn,loginBtn)

// function
async function registerUser()
{
    // گرفتن اطلاعات
    const usernameInput = $.querySelector(".username-input");
    const passwordInput = $.querySelector(".password-input");
    const usernameValue = usernameInput.value;  
    const passwordValue = passwordInput.value;
     // دریافت کاربران موجود
     const response = await fetch('http://localhost:3000/users');
     const users = await response.json();

     // محاسبه ID جدید
     const newId = users.length > 0 ? Math.max(...users.map(user => Number(user.id))) + 1 : 1;
     console.log(newId)
    // تعریف هدرها
    const headers = {
        "Content-Type": "application/json"
    }

      // تعریف بدنه درخواست
      const body = JSON.stringify({
        id: newId,
        username: usernameValue,
        password: passwordValue
    });

    // ارسال درخواست POST به json-server
    fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .then(data => {
        console.log('کاربر با موفقیت ثبت شد:', data);
        Swal.fire({
            title: "success",
            text: "You registered Successfully",
            icon: "success",
            timer:2000
          });        
        usernameInput.value = "";  
        passwordInput.value = "";
    })
    .catch((error) => {
        console.error('خطا در ثبت‌نام:', error);
        Swal.fire({
            title: "error",
            text: "Oops...Try Again",
            icon: "error",
            timer:2000
          });     });
}
signupBtn.addEventListener('click', registerUser);
