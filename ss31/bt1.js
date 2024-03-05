function findLongestWord(str) {
    let words = str.split(" ");
    let longestWord = "";
    let maxLength = 0;
    for (let i = 0; i < words.length; i++) {

        let word = words[i].replace(/[^a-zA-Z0-9]/g, '');

        if (word.length > maxLength) {
            longestWord = word; 
            maxLength = word.length; 
        }
    }

    return { word: longestWord, length: maxLength };
}

let inputString = "Hello world, this is a test string";

let result = findLongestWord(inputString);
console.log("Từ dài nhất trong chuỗi là: " + result.word);
console.log("Độ dài của từ: " + result.length);