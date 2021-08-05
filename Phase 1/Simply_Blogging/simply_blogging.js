function addBlog(){
    var title = document.getElementById("title").value;
    var article = document.getElementById("article").value;
    var image = document.getElementById("image").value;

    let row = document.getElementById("row");
    row.className="row";
    let col = document.createElement("div");
    col.className="col";
    col.id="col"


    let cellTitle=document.createElement("label");
    cellTitle.id= 'artTitle';
    cellTitle.innerHTML=title; 


    
    let cellArt = document.createElement("label");
    cellArt.id = 'blogArt';
    cellArt.innerHTML=article;


    let cellImage = new Image;
    cellImage.className=image;
    cellImage.src = image;
 
 
    
    col.appendChild(cellTitle);
    let br = document.createElement("br");
    col.appendChild(br);

    col.appendChild(cellArt);
    let br2 = document.createElement("br");
    col.appendChild(br2);
    col.appendChild(cellImage);
    row.appendChild(col);

}