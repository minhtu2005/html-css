function vietHoaChuCaiDau(chuoi) {
    var mangTu = chuoi.split(" ");
    for (var i = 0; i < mangTu.length; i++) {
        if (mangTu[i].length > 0) {
            mangTu[i] = mangTu[i][0].toUpperCase() + mangTu[i].slice(1).toLowerCase();
        }
    }
    return mangTu.join(" ");
}
var chuoi = "chương trình viết hoa chữ cái đầu";
console.log(vietHoaChuCaiDau(chuoi));