const a = Number(prompt('Nhập vào số nguyên dương a:'));
const b = Number(prompt('Nhập vào số nguyên dương b:'));
let arr = [];

let min = Math.min(a, b);
let max = Math.max(a, b);

for (let i = min; i <= max; i++) {
    arr.push(i);
}
console.log("Mảng có các số", a, "đến", b, "là:", arr);