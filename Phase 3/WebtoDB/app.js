let express = require("express");
let bodyParser = require("body-parser");
const { request, response } = require("express");
let app = express();
app.use(bodyParser.urlencoded({extended:true}));
let mongoose = require("mongoose");
let url = "mongodb://localhost:27017/phase3_2";
mongoose.pluralize(null);


mongoose.connect(url).then(res=>console.log("connected to mongoDB")).catch(err => console.log(err));
let db = mongoose.connection;
const classObj = mongoose.Schema({
    cid:String,
    name: String,
    Des: String,
    amount: String
})
let courseModel= mongoose.model("Course", classObj);
app.get("/",(request,response)=> {
    response.sendFile(__dirname+"\\index.html");
})
app.get("/addCorse",(request,response)=> {
    
    response.sendFile(__dirname+"\\addCorse.html");
})
app.get("/delete",(request,response)=> {
    
    response.sendFile(__dirname+"\\delete.html");
})
app.get("/fetch",(request,response)=> {
    
    var tableStart =
    `
        <table>
            <tr>
                <th>Course ID</th>
                <th>Course Name</th>
                <th>Course Description</th>
                <th>Course Amount</th>
            </tr>
        
    `;
    let fetchmid = ""
    let tableEnd = "</table><hr>    <a href='index'>Home</a>"
    courseModel.find({}, (err, data) =>{
        if(!err){
            data.forEach( c =>{
                fetchmid += "<tr><td>" + c.cid + "</td>" + "<td>" + c.name + "</td>" +"<td>" + c.Des + "</td>" +"<td>" + c.amount + "</td></tr>";
            })
            response.write(`<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
            </head>
            <body>
                <h1>
                    Fetch Course
                </h1>
                <div>
                    <form>
            
                    </form>
                </div>

                
            </body>
            </html>`)

            response.write(tableStart+fetchmid+ tableEnd)
            //response.json(data);
        }else{
            response.json(err)
        }
    })
    //response.sendFile(__dirname+"\\fetch.html");
    
  
})
app.get("/update",(request,response)=> {
    
    response.sendFile(__dirname+"\\update.html");
})
app.get("/index",(request,response)=> {
   
    response.sendFile(__dirname+"\\index.html");
})
app.get("/updateAction", (request, response)=>{
    let updateID = request.query['ID'];
    let updateAmount = request.query['amount'];
    
    courseModel.updateOne({cid:updateID},{$set:{amount:updateAmount}}, (err,reult)=>{
        if(!err){
            response.sendFile(__dirname+"\\index.html")
        }else{
            response.send(err);
        }
    })

    console.log(updateID)
    
})
app.post("/addAction", (request, response)=>{
    let data = request.body;
 
        let c1 = new courseModel({
            cid:data.ID,
            name:data.Cname,
            Des:data.Des,
            amount:data.amount

        })
        courseModel.insertMany(c1, (err, result) =>{
            if(!err){console.log(result);
            }else{console.log(err);}
        })
    response.sendFile(__dirname+"\\index.html")
})

app.get("/deleteAction", (request, response)=>{
    //let data = request.body;
    let deleteID = request.query['ID'];

    courseModel.deleteOne({cid:deleteID},(err,result)=>{
        if(!err){
            response.sendFile(__dirname+"\\index.html")
        }else{
            response.send(err);
        }
    })
    //console.log(data)
    response.sendFile(__dirname+"\\index.html")
})








app.listen(9090,()=>console.log("Server running on port number 9090"))