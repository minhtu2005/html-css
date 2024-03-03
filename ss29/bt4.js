function countOccurrences(str, char) {
    let count = 0;
    for(let i = 0; i < str.length; i++) {
        if(str[i] === char) {
            count++;
        }
    }
    return count;
}

const inputStr = prompt("Nhập vào một chuỗi:");
const inputChar = prompt("Nhập vào một ký tự:");

console.log(`Số lần xuất hiện của ký tự '${inputChar}' trong chuỗi '${inputStr}' là: ${countOccurrences(inputStr, inputChar)}`);