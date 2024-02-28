var arr = [1, 2, 3, 4, 5, 6, 7];
var num = [];

for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
       num.push(arr[i]);
    }
}
if (num.length > 0) {
    console.log("Các phần tử là số nguyên trong mảng: ", num);
} else {
    console.log("Trong mảng không tồn tại số nguyên");
}