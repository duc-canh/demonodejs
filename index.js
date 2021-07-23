var express = require("express");
var app = express();// tao 1 ung dung tu express module
var port = process.env.PORT || 5000;
app.listen(port,function (){
    console.log("app is running...");
});
// tren bat dau phai viet
// cap quyen truy cap cac file tinh
app.use(express.static("public"));

app.set("view engine","ejs");//báo rằng dùng ejs để làm view engine
var count = 0;
var product =[
    {
        id:1,
        name:"product 1",
        img:"../imagegroup/shirts.jpg"
    },
    {
        id:3,
        name:"product 3",
        img:"../imagegroup/shirts.jpg"
    },
    {
        id:2,
        name:"product 2",
        img:"../imagegroup/shirts.jpg"
    }
]
// rounting bo dinh tuyen
app.get("/",function (req,res){
    //res.sendFile(__dirname+"/public/assignment/as3.html");
   count++;
   ;
    res.render("home",{
        product:product
    });//tự động hiểu lấy file home,ejs trong thư mực
});
app.get("/ke-toan",function (req,res){
    //res.sendFile(__dirname+"/public/vdveboostrapjs.html");
    res.render("vdbts");
});
app.get("/chitiet",function (req,res){
   res.render("chitiet");
});

app.get("/chitiet2/:id",function (req,res){
    var masp = req.params.id;
    var p ={};
    for(var i=0;i<product.length;i++){
        if(product[i] == masp){
            p= product[i];
            break;
        }
    }
    res.render("chitiet",{
        nasp:masp,
        p:p
    });
});