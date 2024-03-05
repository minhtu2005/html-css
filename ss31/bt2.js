function findMaxNumbers(...arrays) {
    let maxNumbers = [];
    for (let arr of arrays) {
      let maxNumber = Math.max(...arr);      
        maxNumbers.push(maxNumber);
    }
    return maxNumbers;
}
let arr1 = [1, 5, 3, 8];
let arr2 = [9, 2, 7, 4];
let arr3 = [6, 10, 12, 11];
let result = findMaxNumbers(arr1, arr2, arr3);
console.log("Số lớn nhất trong mỗi mảng là: ", result);