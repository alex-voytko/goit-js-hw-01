let total = 0;
while (true) {
    let input = prompt('Введите число:');
    if (input === null) {
        console.log('Отменено пользователем');
        break;
    }
    input = Number(input);
    const notANumber = Number.isNaN(input);
    if (notANumber) {
        console.log('Было введено не число, попробуйте еще раз');
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
    total += input;
}
console.log(`Общая сумма чисел равна ${total}`);
alert(`Общая сумма чисел равна ${total}`);
