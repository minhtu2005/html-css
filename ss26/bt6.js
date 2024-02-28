let arr = [-4, 5, -6, -8, -10, 2];
let  result= [];
let num = 0; 
let input= arr.length - 1; 

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        result[num] = arr[i];
        num++;
    } else {
        result[input] = arr[i];
        input--;
    }
}

console.log("Mảng đã sắp xếp: ", sum);