//1-задание
a = 10
b = 5
c = 2
result1 = b - (a + c);
console.log(result1);

result2 = a * b / c;
console.log(result2);

result3 = a % b;
console.log(result3)

//2-задание
x = 7

inkrement = x++ + ++x;
console.log(inkrement);

dikrement = x-- - --x;
console.log(dikrement);

//3-задание
let num1 = 5;
let num2 = 5;
num3 = num1 + num2;

console.log('The result is: ' + num3);

//4-задание
let a1 = 10;
let b1 = 4;
let c1 = 2;

console.log(a1 > b1 > 0);
console.log(c > 10 || c1 === 2);
console.log(a1 / c1 !== 5);

//5-задание
run1 = 10;
run2 = '10';

console.log(run1 == run2);
console.log(run1 === run2);


/*при == это поверхностно и не строго сравнивает
при === это строго сравнивает как так число и строка они разного значение то есть '' для строк*/

//6-задание

let x = 8;

let condition1 = ((x % 2 === 0 || x % 3 === 0) && x % 6 !== 0);

console.log(condition1);

let y = 12;

let condition2 = !(y > 10 || y < 5);

console.log(condition2); // false для 12

