var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newArr = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newArr.push(arr[i]);
    }
}

console.log("Mảng mới sau khi xóa các phần tử lẻ:", newArr);