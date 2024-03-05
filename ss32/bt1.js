let information = {
    id: "",
    name: "",
    phone: "",
    address: ""
};
function inputPersonalInformation() {
    information.id = prompt("Nhập ID của bạn:");
    information.name = prompt("Nhập tên của bạn:");
    information.phone = prompt("Nhập số điện thoại của bạn:");
    information.address = prompt("Nhập địa chỉ của bạn:");
}
function printPersonalInformation() {
    console.log("Thông tin cá nhân:");
    console.log("ID:", information.id);
    console.log("Tên:", information.name);
    console.log("Số điện thoại:", information.phone);
    console.log("Địa chỉ:", information.address);
}
inputPersonalInformation();
printPersonalInformation();