function kiemTraChanLe(number) {
    if (number % 2 === 0) {
        return "số chẵn";
    } else {
        return "số lẻ";
    }
}
function main() {
    
    var so_1 = randomNumber(1, 100);
    var so_2 = randomNumber(1, 100);

    console.log("Số thứ nhất:", so_1);
    console.log("Số thứ hai:", so_2);

    console.log("Kết quả kiểm tra số thứ nhất:", kiemTraChanLe(so_1));
    console.log("Kết quả kiểm tra số thứ hai:", kiemTraChanLe(so_2));   
}
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

main();