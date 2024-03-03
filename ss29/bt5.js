function timChuoiTrongMang(mang, chuoi) {
    var ketQua = [];
    for (var i = 0; i < mang.length; i++) {
        if (mang[i].includes(chuoi)) {
            ketQua.push(mang[i]);
        }
    }

    return ketQua;
}
var mangChuoi = ["Chuỗi 1", "Chuỗi 2", "Chuỗi 3", "Chuỗi 4"];
var chuoiNhap = prompt("Nhập vào chuỗi bạn muốn tìm trong mảng:");
var ketQuaTimKiem = timChuoiTrongMang(mangChuoi, chuoiNhap);
console.log("Các phần tử trong mảng có chứa chuỗi vừa nhập là:");
console.log(ketQuaTimKiem);