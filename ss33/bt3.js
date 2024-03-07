let addressBook = {
    contacts: [
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
    ],
    displayFullInfo: function() {
        for (let i = 0; i < this.contacts.length; i++) {
            console.log("Thông tin đầy đủ liên lạc " + (i + 1) + ":");
            console.log("Tên:", this.contacts[i].name);
            console.log("Số điện thoại:", this.contacts[i].phoneNumber);
            console.log("Email:", this.contacts[i].email);
            console.log("----------------------------------");
        }
    }
};
addressBook.displayFullInfo();