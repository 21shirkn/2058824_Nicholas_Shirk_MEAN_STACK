function add(name, price) {
    var total = JSON.parse(sessionStorage.getItem("JSONtotal"));
    if (total == null) {
        var total_1 = 0;
    }
    var newTotal = total + price;
    var htmlTotal = document.getElementById('totalValue');
    htmlTotal.innerText = String(newTotal);
    console.log(newTotal);
    sessionStorage.setItem("JSONtotal", JSON.stringify(newTotal));
    var itemList = JSON.parse(sessionStorage.getItem("JSONitemArray"));
    if (itemList == null) {
        itemList = [];
    }
    itemList.push(name);
    itemList.push(price);
    console.log(itemList);
    sessionStorage.setItem("JSONitemArray", JSON.stringify(itemList));
}
function arrayFunction() {
    var array = document.getElementById("array");
    var itemList = JSON.parse(sessionStorage.getItem("JSONitemArray"));
    console.log(itemList);
    for (var i = 0; i < itemList.length; i += 2) {
        var newrow = document.createElement("tr");
        var newCell1 = document.createElement("td");
        var newCell2 = document.createElement("td");
        newCell2.className = "rightcell";
        newCell1.innerHTML = String(itemList[i]);
        newCell2.innerText = "$" + String(itemList[i + 1]);
        newrow.appendChild(newCell1);
        newrow.appendChild(newCell2);
        array.appendChild(newrow);
    }
    var htmlTotal = document.getElementById('totalValue');
    var total = JSON.parse(sessionStorage.getItem("JSONtotal"));
    console.log(total);
    htmlTotal.innerText = String(total);
}
