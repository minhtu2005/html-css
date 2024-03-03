function phanTuMaxTrongMang(arr) {
    let maxElement = arr[0]; 
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].length > maxElement.length) {
            maxElement = arr[i];
        }
    }

    return maxElement;
}
function main() {
    var mang = ["Hello", "World", "OpenAI", "Language", "Model"];
    console.log("Mảng đã khai báo:", mang);

    console.log("Phần tử có độ dài lớn nhất trong mảng là:", phanTuMaxTrongMang(mang));
}

main();