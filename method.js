var infor = [
    {name:"quan",age:18},
    {name:"ky",age:19},
    {name:"yen",age:20},
    {name:"linh",age:18},
];
function render(arr){
    var newArr = arr.map((x,index)=>{
        return `<tr><td>${index}</td><td>${x.name}</td><td>${x.age}</td></tr>`;
    });
    document.getElementById("pasteInf").innerHTML=newArr.join("");
}
render(infor);
function admit(){
    var newUser = document.getElementById("inputInf").value;
    newUser = newUser.split('');
    infor.push({name:newUser[0],age:parseInt(newUser[1])});
    render(infor);
}
function chooseInf(){
    var age = document.getElementById("filterAge").value;
    if(isNaN(age)){
        render(infor);
    }
    else{
    var newInfor = infor.filter(x=>{
       return x.age==age;
    });
    render(newInfor);
    }
}