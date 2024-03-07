let contacts = [
    {
        name: "John Doe",
        phoneNumber: "123-456-7890",
        email: "john@example.com"
    },
    {
        name: "Jane Smith",
        phoneNumber: "987-654-3210",
        email: "jane@example.com"
    },
    {
        name: "Bob Johnson",
        phoneNumber: "555-123-4567",
        email: "bob@example.com"
    }
];
for (let i = 0; i < contacts.length; i++) {
    console.log("Thông tin liên lạc " + (i + 1) + ":");
    console.log("Tên:", contacts[i].name);
    console.log("Số điện thoại:", contacts[i].phoneNumber);
    console.log("Email:", contacts[i].email);
    console.log("----------------------------------");
}