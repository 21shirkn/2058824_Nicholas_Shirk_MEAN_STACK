function addData(){

    var clientName = document.getElementById("clientName").value;
    var projectName = document.getElementById("projectName").value;
    var budget = document.getElementById("budget").value;
    let newbudget ={cn:clientName, pn:projectName, b:budget};
    var projList = JSON.parse(sessionStorage.getItem("JSONprojList"));



    if(!Array.isArray(projList)){
        projList=[];
    } 
    projList.push(newbudget);
    projList= JSON.stringify(projList);

    sessionStorage.setItem("JSONprojList", projList);



}

function clearData(){

    document.getElementById("clientName").value= "";
    document.getElementById("projectName").value="";
    document.getElementById("budget").value="";


}

function getData(){
    let proObj = sessionStorage.getItem("JSONprojList");
    let proJSON = JSON.parse(proObj);
    console.log(proJSON);
    var table= document.getElementById('myTable');
    for (var i =0; i < proJSON.length; i++){
        var row = `<tr>
                        <td>${proJSON[i].cn}</td>
                        <td>${proJSON[i].pn}</td>
                        <td>$${proJSON[i].b}</td>
                    </tr>`
        table.innerHTML += row;
    } 
    var total =0;  
    for (var i =0; i < proJSON.length; i++){
        total += Number(proJSON[i].b);

    }
    console.log(total)
    var totalValue = document.getElementById("total");
    totalValue.append("$"+ total.toString());
    
}

