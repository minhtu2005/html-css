function isSymmetric(arr) {
    return JSON.stringify(arr) === JSON.stringify(arr.slice().reverse());
}

let array = [];
for (let i = 0; i < 10; i++) {
    array.push(Math.floor(Math.random() * 10) + 1);
}

console.log("Mảng đã cho:", array);
if (isSymmetric(array)) {
    console.log("Mảng là đối xứng.");
} else {
    console.log("Mảng không đối xứng.");
}