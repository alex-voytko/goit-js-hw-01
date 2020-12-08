let userPassword = prompt('Введите пароль:');
console.log(userPassword);
const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
if (userPassword === null) {
    message = 'Отменено пользователем!';
}
 else if (userPassword === ADMIN_PASSWORD) {
     message = 'Добро пожаловать!';
 }
 else {
     message = 'Доступ запрещен, неверный пароль!';
 }
console.log(message);
alert(message)