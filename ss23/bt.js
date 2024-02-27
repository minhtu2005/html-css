const Num = parseInt(prompt("Nhập vào một số nguyên dương:"));
if (isNaN(num) || num <= 0) {
    console.log("Vui lòng nhập một số nguyên dương.");
} else {
    for (let i = 1; i <= num; i++) {
        console.log(i);
    }
}