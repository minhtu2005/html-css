const a = Number(prompt("Nhập vào số thứ nhất:"));
const b = Number(prompt("Nhập vào số thứ hai:"));

if (a % b == 0) {
    console.log("Số a chia hết cho số b");
} else if (b % a == 0) {
    console.log("Số b chia hết cho số a");
} else {
    console.log("Cả hai số không chia hết cho nhau");
}