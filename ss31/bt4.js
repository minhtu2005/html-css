function truncate(str, n) {
    if (str.length <= n) {
        return str;
    }
    let truncatedString = str.slice(0, n) + "...";
    
    return truncatedString;
}
let str = "Hello world!";
let n = 7;

console.log(truncate(str, n));