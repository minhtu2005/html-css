function demSoKyTuKhongKhoangTrang(chuoi) {
    return chuoi.replace(/\s/g, "").length;
}
var chuoikitu = prompt("Nhập chuỗi kí tự bạn muốn nhập vào: ");
var kitunhap = demSoKyTuKhongKhoangTrang(chuoikitu);

console.log("Số ký tự trong chuỗi là:", kitunhap);