let person = {
    name: "John Doe",
    age: 30,
    address: "123 Main St"
}
console.log("Tên:", person.name);
console.log("Tuổi:", person.age);
console.log("Địa chỉ:", person.address);
person.dateOfBirth = "1994-05-20"; 
delete person.age;
console.log("Sau khi thêm ngày sinh và xóa tuổi:");
console.log("Tên:", person.name);
console.log("Ngày sinh:", person.dateOfBirth);
console.log("Địa chỉ:", person.address);