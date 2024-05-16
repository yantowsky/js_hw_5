//HomeWork_5.1
let arrNumbers = [];
for (let i = 20; i < 30.5; i += 0.5) {
    arrNumbers.push(i);
}
console.log("HomeWork 5.1:");
console.log(arrNumbers.join(' '));
console.log("=======================================");

//HomeWork_5.2
let usdToUah = 26;
let sumUah;
console.log("HomeWork 5.2:");
console.log(`Курс $1 = ${usdToUah} грн.`);
for (let i = 10; i < 101; i += 10) {
    sumUah = i * usdToUah;
    console.log(`Вартість $${i} = ${sumUah} грн.`);
}
console.log("=======================================");

//HomeWork_5.3
let integer = +prompt("Введіть ціле число:"); // input integer for HomeWorks 5.3 & 5.4
console.log("HomeWork 5.3:");
for (i = 1; i < 101; i++) {
    let res = Math.pow(i, 2);
    res <= integer && console.log(`Квадрат числа ${i} дорівнює ${res}, та не перевищує число ${integer}`);
}
console.log("=======================================");

//HomeWork_5.4
console.log("HomeWork 5.4:");
for (i = 2; i <= 10; i++) {
    let result = integer % i;
    if (result === 0 && integer > 2) {
        console.log(`${integer} - число не просте`);
        break;
    } else if (integer === 1) {
        console.log(`${integer} - число не просте`);
        break;
    } else if (integer === 2 || integer === 3 || integer === 5 || integer === 7) {
        console.log(`${integer} - число просте `);
        break;
    } else if (i === 10 && result > 0) {
        console.log(`${integer} - число просте `);
        break;
    }
}