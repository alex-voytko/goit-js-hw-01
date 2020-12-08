const noDelivery = 'В вашей стране доставка не доступна';
const canceledByUser = 'Отменено пользователем!';
let country;
let deliveryOrder;
deliveryOrder = prompt('Укажите страну для доставки');
if (deliveryOrder === null) {
    console.log(canceledByUser);
    alert(canceledByUser);
} else {
    country = deliveryOrder.toLowerCase();
    switch(country) {
        case 'китай':
            console.log(`Доставка в Китай будет стоить 100 кредитов`);
            alert('Доставка в Китай будет стоить 100 кредитов');
            break;
        case 'чили':
            console.log(`Доставка в Чили будет стоить 250 кредитов`);
            alert('Доставка в Чили будет стоить 250 кредитов');
            break;
        case 'австралия':
            console.log(`Доставка в Австралию будет стоить 170 кредитов`);
            alert('Доставка в Австралию будет стоить 170 кредитов');
            break;
        case 'индия':
            console.log(`Доставка в Индию будет стоить 80 кредитов`);
            alert('Доставка в Индию будет стоить 80 кредитов');
            break;
        case 'ямайка':
            console.log(`Доставка в Ямайку будет стоить 120 кредитов`);
            alert('Доставка в Ямайку будет стоить 120 кредитов');
            break;
        default: 
            console.log(noDelivery);
            alert(noDelivery);
    }
}