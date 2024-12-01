let $ = document

const signupBtn = $.querySelector(".signup-btn")
const loginBtn = $.querySelector(".login-btn")
// console.log(usernameInput,passwordInput,signupBtn,loginBtn)

// function
async function registerUser()
{
    // گرفتن اطلاعات
    const usernameInput = $.querySelector(".username-input").value;
    const passwordInput = $.querySelector(".password-input").value;

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
        username: usernameInput,
        password: passwordInput
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
        alert('ثبت‌نام با موفقیت انجام شد!');
    })
    .catch((error) => {
        console.error('خطا در ثبت‌نام:', error);
        alert('خطا در ثبت‌نام. لطفا دوباره تلاش کنید.');
    });

}