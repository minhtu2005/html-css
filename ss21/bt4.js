var year = Number(prompt("nhập vào năm"));
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(year + " là năm nhuận");
} else {
    console.log(year + " không phải là năm nhuận");
}