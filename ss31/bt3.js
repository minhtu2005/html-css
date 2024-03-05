function endsWith(str, target) {
    if (target.length > str.length) {
        return false;
    }
    let endOfStr = str.slice(-target.length);
    return endOfStr === target;
}
let str = "Hello world";
let target = "world";

console.log(endsWith(str, target));