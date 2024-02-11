// відправлення форми form.login-form повинна відбуватися за подією submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'.
//  Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
// Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів
// а значення — відповідні значення цих інпутів, очищені від пробілів по краях.Для доступу до елементів форми використовуй властивість elements.
// При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


const form = document.querySelector(".login-form")
console.log(form)
form.addEventListener("submit", sendform)
function sendform(event) {
    event.preventDefault();
    const userEmail = form.elements.email;
    const userPassword = form.elements.password;
    if (userEmail.value.trim() === "" || userPassword.value.trim() === "") {
        alert(`All form fields must be filled in`)
    }
    else {
        const list = {
            email: userEmail.value.trim(),
            password: userPassword.value.trim()
        };
        console.log(list)
        form.reset()
    }
};