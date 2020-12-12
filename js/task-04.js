let howMuchDroids = prompt('Какое количество дроидов вы хотите купить?');
const credits = 23580;
const pricePerDroid = 3000;
let message;
if (howMuchDroids === null) {
    message = 'Отменено пользователем';
} else {
    let totalPrice = howMuchDroids * pricePerDroid;
    let accountBalance = credits - totalPrice;
    if (credits >= totalPrice) {
        message = `Вы купили ${howMuchDroids} дроидов, на счету осталось ${accountBalance} кредитов.`;
    } else if (credits < totalPrice) {
        message = 'Недостаточно средств на счету!';
    } else {
        message = 'Неверный ввод! Вводить можно только числовые значения.';
    }
}
console.log(message);
alert(message);