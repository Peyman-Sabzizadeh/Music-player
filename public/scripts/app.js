const $ = document;

const signupBtn = $.querySelector(".signup-btn");
const loginBtn = $.querySelector(".login-btn");

async function registerUser() {
    // دریافت مقادیر ورودی
    const usernameInput = $.querySelector(".username-input");
    const passwordInput = $.querySelector(".password-input");
    const usernameValue = usernameInput.value;  
    const passwordValue = passwordInput.value;

    // دریافت کاربران موجود
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    // بررسی نام کاربری تکراری
    const usernameExists = users.some(user => user.username === usernameValue);
    if (usernameExists) {
        Swal.fire({
            title: "خطا",
            text: "این نام کاربری قبلاً استفاده شده است. لطفاً نام کاربری دیگری انتخاب کنید.",
            icon: "error",
            timer: 2000
        });
        return; // خروج از تابع در صورت وجود نام کاربری
    }

    // محاسبه ID جدید
    const newId = users.length > 0 ? Math.max(...users.map(user => Number(user.id))) + 1 : 1;
    console.log(newId);

    // تعریف هدرها
    const headers = {
        "Content-Type": "application/json"
    };

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
            title: "موفقیت",
            text: "شما با موفقیت ثبت‌نام کردید",
            icon: "success",
            timer: 2000
        });
        usernameInput.value = "";  
        passwordInput.value = "";
    })
    .catch((error) => {
        console.error('خطا در ثبت‌نام:', error);
        Swal.fire({
            title: "خطا",
            text: "اوپس... دوباره تلاش کنید",
            icon: "error",
            timer: 2000
        });
    });
}
// لاگین کاربر
async function loginUser() {
    // دریافت مقادیر ورودی
    const usernameInput = $.querySelector(".username-input");
    const passwordInput = $.querySelector(".password-input");
    const usernameValue = usernameInput.value;  
    const passwordValue = passwordInput.value;

    // دریافت کاربران موجود
    const response = await fetch('http://localhost:3000/users');
    const users = await response.json();

    // بررسی اعتبار کاربر
    const userExists = users.some(user => user.username === usernameValue && user.password === passwordValue);
    if (userExists) {
        Swal.fire({
            title: "موفقیت",
            text: "شما با موفقیت وارد شدید!",
            icon: "success",
            timer: 2000
        });
        usernameInput.value = "";  
        passwordInput.value = "";
    } else {
        Swal.fire({
            title: "خطا",
            text: "نام کاربری یا رمز عبور اشتباه است. لطفاً ثبت‌نام کنید.",
            icon: "error",
            timer: 2000
        });
    }
}

signupBtn.addEventListener('click', registerUser);
loginBtn.addEventListener('click', loginUser);