
function capitalizeLastLetterOfWords(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 1) {
            let lastLetter = word.charAt(word.length - 1).toUpperCase();
            words[i] = word.slice(0, -1) + lastLetter;
        }
    }
    return words.join(" ");
}
let userInput = prompt("Nhập vào một chuỗi bất kỳ:");
let result = capitalizeLastLetterOfWords(userInput);
console.log("Chuỗi sau khi chuyển đổi là: " + result);