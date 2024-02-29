var arr = [1, , 3, , 5, , 7, 8, 9, 10];
console.log("Mảng cho sẵn:", arr);

function findMinMax(array) {
    var max = array[0];
    var min = array[0];

    for (var i = 1; i < array.length; i++) {
        if (typeof array[i] !== '') { 
            if (array[i] > max) {
                max = array[i];
            }
            if (array[i] < min) {
                min = array[i];
            }
        }
    }

    return {min, max};
}

var result = findMinMax(arr);
console.log('Phần tử lớn nhất trong mảng là:', result.max);
console.log('Phần tử nhỏ nhất trong mảng là:', result.min);