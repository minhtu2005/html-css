var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num = [];
var sum = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        num.push(arr[i]);
    } else {
        sum.push(arr[i]);
    }
}
console.log("Mảng chứa số chẵn:", num);
console.log("Mảng chứa số lẻ:", sum);