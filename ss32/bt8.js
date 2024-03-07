let users = [];
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
function register() {
    console.log("Đăng ký tài khoản");
    let id = users.length + 1;
    let user_name = prompt("Nhập tên người dùng:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    if (!user_name.trim() || !validateEmail(email) || password.length < 8) {
        console.log("Thông tin không hợp lệ. Vui lòng kiểm tra lại.");
        return;
    }
    if (users.some(user => user.email === email)) {
        console.log("Email đã tồn tại. Vui lòng sử dụng email khác.");
        return;
    }
    users.push({ id, user_name, email, password });
    console.log("Đăng ký thành công!");
}
function login() {
    console.log("Đăng nhập");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");
    let user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        console.log("Đăng nhập thất bại. Email hoặc mật khẩu không đúng.");
        return;
    }
    console.log("Đăng nhập thành công!");
    console.log("Thông tin tài khoản:");
    console.log(`ID: ${user.id}`);
    console.log(`Tên người dùng: ${user.user_name}`);
    console.log(`Email: ${user.email}`);
}
function main() {
    let choice;
    do {
        console.log("\n===== MENU =====");
        console.log("1. Đăng ký tài khoản");
        console.log("2. Đăng nhập");
        console.log("3. Thoát");
        choice = prompt("Nhập lựa chọn:");

        switch (choice) {
            case "1":
                register();
                break;
            case "2":
                login();
                break;
            case "3":
                console.log("Chương trình kết thúc.");
                break;
            default:
                console.log("Lựa chọn không hợp lệ. Vui lòng nhập lại.");
        }
    } while (choice !== "3");
}
main();