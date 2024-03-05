function inputStudentInformation(numberOfStudents) {
    let students = []; 

    for (let i = 0; i < numberOfStudents; i++) {
        let id = prompt(`Nhập ID của sinh viên thứ ${i + 1}:`);
        let name = prompt(`Nhập tên của sinh viên thứ ${i + 1}:`);
        let student = {
            id: id,
            name: name
        };
        students.push(student);
    }
    return students; 
}
function printStudentArray(students) {
    console.log("Danh sách sinh viên:");
    students.forEach((student, index) => {
        console.log(`Sinh viên thứ ${index + 1}:`);
        console.log("ID:", student.id);
        console.log("Tên:", student.name);
    });
}
let numberOfStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
let studentArray = inputStudentInformation(numberOfStudents);
printStudentArray(studentArray);