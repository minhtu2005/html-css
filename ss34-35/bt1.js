const listItem = ["list item number 1", "list item number 2", "list item number 3"];
listItem.forEach((itemText, index) => {
    var listItemElement = document.createElement("p");
    listItemElement.textContent = itemText;
    if (index === 0) {
        listItemElement.classList.add("hu");
    }
    document.body.appendChild(listItemElement);
});
var item2 = document.createElement("p");
item2.textContent = "alo";
document.body.appendChild(item2);
var item3 = document.createElement("a");
item3.setAttribute("href", "https://www.facebook.com/");
item3.textContent = "cc";
document.body.appendChild(item3);