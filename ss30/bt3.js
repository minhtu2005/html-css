function splitStringByType(inputString) {
    let num = [];
    let sum= [];
    let specials = [];
    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];
        if (/[a-zA-Z]/.test(char)) {
            num.push(char);
        } else if (/[0-9]/.test(char)) {
            sum.push(char);
        } else {
            specials.push(char);
        }
    }
    return n/um.concat(sum, specials);
}

let inputString = prompt("Nhập vào một chuỗi bất kỳ:");
let resultArray = splitStringByType(inputString);

console.log("Mảng các ký tự theo thứ tự: ", resultArray);