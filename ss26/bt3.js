var arr = [1, 2, 3, 4, 5, 8, 6, 4, 3, 2];
var num = parseInt(prompt("Nhập vào một số nguyên:"));
var so = 0;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
        so++;
    }
}

console.log("Số " + num + " xuất hiện " + so + " lần trong mảng.");