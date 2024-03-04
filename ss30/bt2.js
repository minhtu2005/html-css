function printOddNumbers(n) {
    let oddSum = 0;
    let count = 0;
    let currentNumber = 1;
    while (oddSum + currentNumber <= n) {
        console.log(currentNumber);
        oddSum += currentNumber;
        currentNumber += 2;
        count++;
    }
    if (oddSum % 2 === 0) {
        console.log(currentNumber);
        count++;
    }
    console.log("Tổng số lẻ đã in ra là:", oddSum);
    console.log("Tổng số lần in ra:", count);
}
let n = parseInt(prompt("Nhập số nguyên dương n:"));
if (n > 0) {
    console.log("Các số nguyên dương lẻ lớn nhất có tổng là số lẻ từ 0 đến", n, "là:");
    printOddNumbers(n);
} else {
    console.log("Vui lòng nhập số nguyên dương n lớn hơn 0.");
}