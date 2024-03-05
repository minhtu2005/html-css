let information = {
    id: "123",
    name: "John",
    phone: "0123456789",
    address: "123 Main Street"
};
delete information.address;
information.email = "john@example.com";
console.log("Thông tin đối tượng sau khi chỉnh sửa:");
console.log(information);
