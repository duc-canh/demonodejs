// function batdautinh(){
//     var a = parseInt(document.getElementById("txtA").value);
//     var b = parseInt(document.getElementById("txtB").value);
//     var c = parseInt(document.getElementById("txtC").value);
//     if(a = null){
//         alert("hay nhap a")
//     }
//}
var p = {
    name:"nguyen van a",
    age:"18",
    classs:"12A",
    speak:"chao co a",
    functions:fullif = function () {
        return this.name + "," + this.age + "tuoi , hoc lop " + this.classs;
    }
}
var c = {
    name:"co giao c",
    clas:"12a",
    rl:p.speak
}
alert(c.rl);

function hocsinh(name,age,clas) {
    this.name=name;
    this.age=age;
    this.clas=clas;
    this.speaking="chao co";
    this.fullif = function (){
        return this.name + "," + this.age + "tuoi , hoc lop " + this.clas;
    };
}
function cogiao(name,clas){
    this.name=name;
    this.clas=clas;
    this.hs=new hocsinh("nguyen van b",12,1)
}
var cogiaoa = new cogiao("co giao a",1);
alert(cogiaoa.hs.speaking);