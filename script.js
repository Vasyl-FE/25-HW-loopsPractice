console.log('1.Вивести в один рядок через кому числа від 10 до 20.')
let i = 10;
while (i <= 20) {
    console.log(i);
    i++;
}

console.log('2.Вивести квадрати чисел від 10 до 20.')
for (let i = 10; i <= 20; i++) {
    console.log(i * i)
}

console.log('3.Вивести таблицю множення на 7.')
let a = 1;
while (a <= 7) {
    console.log(a * 7)
    a++;
}

console.log('4. Знайти суму всіх цілих чисел від 1 до 15.')
let sum = 0;
for (let a = 1; a <= 15; a++) {
    sum += a;
}
console.log(sum)

console.log('5. Знайти добуток усіх цілих чисел від 15 до 35.')
let sum2 = 1;

for (let i = 15; i <= 35; i++) {
    sum2 *= i
}
console.log(sum2)

console.log('6. Знайти середнє арифметичне всіх цілих чисел від 1 до 500.')
let result = 0;
let average = 0;
for (let i = 1; i <= 500; i++) {
    average += i;
    result = average / 500;
}
console.log(result)

console.log('7.Вивести суму лише парних чисел в діапазоні від 30 до 80.')
let total = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}
console.log(total)

console.log('8.Вивести всі числа в діапазоні від 100 до 200 кратні 3.')
for (let a = 100; a <= 200; a++) {
    if (a % 3 === 0) {
        console.log(a)
    }
}

console.log('9. Дано натуральне число. Знайти та вивести на сторінку всі його дільники.')
let number = 100;

for (let i = 1; i <= 100; i++) {
    if (number % i === 0) {
        console.log(i)
    }
}

console.log('10. Визначити кількість його парних дільників.' +
    '11. Знайти суму його парних дільників.')
let count = 0;
let amount = 0;
for (let i = 1; i <= 100; i++) {
    if (number % i === 0) {
        if (i % 2 === 0) {
            count++;
            amount += i
        }
    }
}
console.log(count)
console.log(amount)

console.log('12. Надрукувати повну таблицю множення від 1 до 10.')
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i * j);
    }
}


