class Product {
    constructor(id, name, price, expiryDate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.expiryDate = expiryDate;
    }
  }
  class Employee {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
  }
  class Invoice {
    constructor(products, quantities) {
        this.products = products;
        this.quantities = quantities;
    }
    calculateTotal() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price * this.quantities[i];
        }
        return total;
    }
  }
  class Store {
    constructor() {
        this.products = [];
        this.employees = [];
        this.invoices = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addInvoice(invoice) {
        this.invoices.push(invoice);
    }
    displayOverview() {
        console.log("Tổng số lượng sản phẩm:", this.products.length);
        console.log("Tổng số lượng nhân viên:", this.employees.length);
        console.log("Tổng doanh thu:", this.calculateTotalRevenue());
    }
    calculateTotalRevenue() {
        let totalRevenue = 0;
        for (const invoice of this.invoices) {
            totalRevenue += invoice.calculateTotal();
        }
        return totalRevenue;
    }
    checkExpiryDate() {
        for (const product of this.products) {
            console.log(`Sản phẩm ${product.name} có hạn sử dụng vào ngày ${product.expiryDate}.`);
        }
    }
  }
  function addProduct(store) {
    const id = prompt("Nhập ID của sản phẩm:");
    const name = prompt("Nhập tên của sản phẩm:");
    const price = parseFloat(prompt("Nhập giá của sản phẩm:"));
    const expiryDate = prompt("Nhập hạn sử dụng của sản phẩm (dd/mm/yyyy):");
    const product = new Product(id, name, price, expiryDate);
    store.addProduct(product);
    console.log("Đã thêm sản phẩm vào cửa hàng.");
  }
  function addEmployee(store) {
    const id = prompt("Nhập ID của nhân viên:");
    const name = prompt("Nhập tên của nhân viên:");
    const age = parseInt(prompt("Nhập tuổi của nhân viên:"));
    const employee = new Employee(id, name, age);
    store.addEmployee(employee);
    console.log("Đã thêm nhân viên vào cửa hàng.");
  }
  function addInvoice(store) {
    const products = [];
    const quantities = [];
    const numProducts = parseInt(prompt("Nhập số lượng sản phẩm trong hóa đơn:"));
    for (let i = 0; i < numProducts; i++) {
        const productId = prompt(`Nhập ID của sản phẩm thứ ${i + 1}:`);
        const product = store.products.find(p => p.id === productId);
        if (product) {
            const quantity = parseInt(prompt(`Nhập số lượng của sản phẩm ${product.name}:`));
            products.push(product);
            quantities.push(quantity);
        } else {
            console.log("Không tìm thấy sản phẩm có ID này trong cửa hàng.");
            return;
        }
    }
    const invoice = new Invoice(products, quantities);
    store.addInvoice(invoice);
    console.log("Đã thêm hóa đơn vào cửa hàng.");
  }
  const store = new Store();
  
  let choice;
  do {
    choice = parseInt(prompt("Chọn 1 để nhập sản phẩm, 2 để nhập nhân viên, 3 để nhập hóa đơn, 4 để hiển thị thông tin tổng quan, 5 để kiểm tra hạn sử dụng, 6 để thoát."));
    switch (choice) {
        case 1:
            addProduct(store);
            break;
        case 2:
            addEmployee(store);
            break;
        case 3:
            addInvoice(store);
            break;
        case 4:
            store.displayOverview();
            break;
        case 5:
            store.checkExpiryDate();
            break;
        case 6:
            console.log("Đã thoát chương trình.");
            break;
        default:
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
    }
  } while (choice !== 6);