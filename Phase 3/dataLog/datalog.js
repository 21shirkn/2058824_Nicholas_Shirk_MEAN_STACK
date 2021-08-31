let r1 = require("readline-sync");	
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
let user = {
    Fname:r1.question("enter first name "),
    Lname:r1.question("Enter Last name "),
    gender: r1.question("enter gender "),
    email: r1.question("enter email "),
    time:dateTime
    
}
debugger;

let fs = require("fs");
const path = './dataStorage.JSON';
debugger
if(fs.existsSync('dataStorage.JSON')){
    fs.readFile("dataStorage.JSON", (err, data)=>{
        if(!err){
            var inmsg = []
            var inmsgJSON = data.toString();
            inmsg= JSON.parse(inmsgJSON);
            console.log(inmsg);
            inmsg.push(user);
            inmsgJSON = JSON.stringify(inmsg);
            fs.writeFile("dataStorage.JSON", inmsgJSON, (err)=> {
                if(!err){
                    console.log("Data stored in file successfully");
                    debugger;
                }
            })
        }
    });
}else{
    let dataStorage = []

    dataStorage.push(user);
    let inmsgJSON = JSON.stringify(dataStorage);
        fs.writeFile("dataStorage.JSON", inmsgJSON, (err)=> {
            if(!err){
                console.log("Data stored in file successfully");
                debugger;
            }
        })

}
