let howMuchDroids = prompt('Какое количество дроидов вы хотите купить?');
howMuchDroids = Number(howMuchDroids);

const credits = 23580;
const pricePerDroid = 3000;
const canceledByUser = 'Отменено пользователем!';
const insufficientFunds = 'Недостаточно средств на счету!';
let totalPrice = howMuchDroids * pricePerDroid;
let accountBalance = credits - totalPrice;
let message;
if (howMuchDroids === null) {
    message = canceledByUser;
    }   
    else if (credits >= totalPrice) {
        message = `Вы купили ${howMuchDroids} дроидов, на счету осталось ${accountBalance} кредитов.`;
    }   
    else {
        message = insufficientFunds;
    }
console.log(message);
alert(message)

