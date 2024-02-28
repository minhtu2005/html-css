var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = parseInt(prompt("Nhập vào phần tử bạn muốn tìm:"));
var index = arr.indexOf(num);

if (index !== -1) {
    console.log('Phần tử', num, 'nằm ở vị trí', index, 'trong mảng.');
} else {
    console.log('Phần tử', num, 'không tồn tại trong mảng.');
}