let http = require("http");
let url = require("url");
let fs = require("fs");
const path = './data.json';
let dataArray = [];



let indexPage = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Task Planner</h1>
    <a href="addTask">Add Task</a>
    <hr>
    <form action = "deleteTask">
        <input type = "text" name = "taskID">
        <input type = "submit" value = "Delete Task">
    </form>

    <form action= "displayTask">
        <h2>List of Task</h2><br>

        
        <input type = "submit" value = "Display Tasks">
    </form>
    
</body>
</html>
`



let addTask = ` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Task Planner</h1>
    <form action = "addTaskAction">
        <h2>Add Task</h2>
        Emp ID <input type = "text" name="empID"><br>
        Task ID <input type = "text" name="taskID"><br>
        Task <input type = "text" name = "task"><br>
        Deadline <input type = "date" name = "deadline"><br>
        <input type = "submit" value = "Add Task">
    </form>
    <a href="listTask">Task List</a>


`



let server = http.createServer((request, response)=> {
    let urlInfo= url.parse(request.url, true);


    if(urlInfo.path != "/favicon.ico"){
        //if(urlInfo.path =="/indexPage"){
        console.log("path " + urlInfo.path);
        console.log("pathname " + urlInfo.pathname);
        if( urlInfo.path == "/addTask"){
            response.write(addTask);
        }else if(urlInfo.path == "/listTask"){
            response.write(indexPage);
        }else if(urlInfo.pathname == "/addTaskAction"){
            console.log("test 5")
                // fs.readFileSync(path, (err, data)=>{
                //     let temp = data.toString();
                //     dataArray = JSON.parse(temp);
                // })
                dataArray = JSON.parse(fs.readFileSync(path).toString());
                //console.log(dataArray);
                    let taskDet = urlInfo.query;
                    let result = dataArray.find(t => t.taskID == taskDet.taskID)
                    if(result == undefined){
                        dataArray.push(taskDet);   
                        console.log(taskDet);
                        console.log("\n \n \n")
                        fs.writeFileSync(path, JSON.stringify(dataArray), (err) =>{
                            if(!err){
                                console.log("Data stored successfully");
                            }
                        })
                    }//end if result
                    else{
                        console.log("Unique task ID required");
                    }
            response.write(addTask);
        }else if(urlInfo.pathname == "/displayTask"){
            console.log("test 3")
                let currentTable = JSON.parse(fs.readFileSync(path));
                var tableContent = "";
                var tableStart =
                `
                    <table>
                        <tr>
                            <th>Emp ID</th>
                            <th>Task ID</th>
                            <th>Task</th>
                            <th>Deadline</th>
                        </tr>
                    
                `
                currentTable.forEach(i =>{
                    tableContent += "<tr><td>" + i.empID + "</td><td>" + i.taskID+"</td><td>" + i.task+"</td><td>" + i.deadline + " </td></tr>";
                })
                var tableEnd = "</table>";
                response.write(indexPage+  tableStart + tableContent + tableEnd)

        }//end if displayTask
        else if (urlInfo.pathname == "/deleteTask") {
            console.log("delet task");
            dataArray = JSON.parse(fs.readFileSync(path).toString());
            let taskDet = urlInfo.query;
            let index = dataArray.findIndex(i => i.taskID ==taskDet.taskID);
            //let result = dataArray.find(t => t.taskID == taskDet.taskID)
           
            dataArray.splice(index,1);

            console.log(dataArray);
            fs.writeFileSync(path, JSON.stringify(dataArray), (err) =>{
                if(!err){
                    console.log("Data stored successfully");
                }
            })
        
            

            response.write(indexPage);
          
        }
        else{
        response.write(indexPage);
        }//end else
    }
    
    response.end();
})

server.listen(9090, () => console.log("Server running on port  9090"));