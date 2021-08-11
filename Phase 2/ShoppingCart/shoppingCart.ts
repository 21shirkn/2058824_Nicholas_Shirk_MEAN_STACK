function add(name:string, price:number){
    let total:number = JSON.parse(sessionStorage.getItem("JSONtotal"));
    if(total == null){
       let total:number = 0;
    }
    let newTotal:number = total + price;
    const htmlTotal = document.getElementById('totalValue');
    htmlTotal.innerText=String(newTotal);
    console.log(newTotal);
    sessionStorage.setItem("JSONtotal", JSON.stringify(newTotal));
    let itemList: (string |number)[]= JSON.parse(sessionStorage.getItem("JSONitemArray"));
    if( itemList == null){
        itemList=[];
    }
    itemList.push(name);
    itemList.push(price);
    console.log(itemList);
    sessionStorage.setItem("JSONitemArray", JSON.stringify(itemList));
}


function arrayFunction(){
    let array = document.getElementById("array");
    let itemList: (string |number)[]= JSON.parse(sessionStorage.getItem("JSONitemArray"));
    console.log(itemList);
    for(let i = 0; i<itemList.length; i+=2){
        let newrow = document.createElement("tr");
        let newCell1 = document.createElement("td");
        let newCell2 = document.createElement("td");
        newCell2.className = "rightcell";
        newCell1.innerHTML=String(itemList[i]);
        newCell2.innerText="$" +String(itemList[i+1]);
        newrow.appendChild(newCell1);
        newrow.appendChild(newCell2);
        array.appendChild(newrow);

    }
    const htmlTotal = document.getElementById('totalValue');
    let total:number = JSON.parse(sessionStorage.getItem("JSONtotal"));
    console.log(total);
    htmlTotal.innerText=String(total);


}