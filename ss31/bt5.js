function chunkArrayInGroups(arr, n) {
    let result = [];
    let index = 0;
    while (index < arr.length) {
        result.push(arr.slice(index, index + n));
        index += n;
    }

    return result;
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let n = 3;

console.log(chunkArrayInGroups(arr, n));