var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function count(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

var count = count(arr);

console.log("Mảng mới sau khi sắp xếp ngẫu nhiên:", count);