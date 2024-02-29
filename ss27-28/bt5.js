let arr = [1, 2, 4, 5, 6, 5, 7, 8];
let num = null;

let count = {};

for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (count[sum]) {
        countMap[sum]++;
    } else {
        count[element] = 1;
    }
}

for (let i = 0; i < arr.length; i++) {
    let sum  = arr[i];
    if (count[sum] === 1) {
        num = sum;
        break;
    }
}

if (num !== null) {
    console.log("Phần tử đầu tiên độc nhất trong mảng là:", num);
} else {
    console.log("Không có phần tử độc nhất trong mảng.");
}