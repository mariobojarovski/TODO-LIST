// create an array
var myArr = [];
let i=0,k=0,rem=0;

//FUNKCIJA PUSH DATA
function pushData()
{
    var inputText = document.getElementById('inputText').value;
    myArr.push(inputText); 
    createButton();
    print(myArr); 
}
// BUTTON
function createButton(inputText) {
    //index();
        let btn = document.createElement("BUTTON");
        btn.innerHTML = "x";
        btn.index =i;
        console.log(btn.index);
        i++;
    document.body.appendChild(btn);
    //if (btn.onclick=true){
    //let rem=btn.id
    //btn.removeChild();
    //a.splice(rem,1);
    
    
 }
/*
 function inex(){
     for(btn.index=0;btn.index<a.lenght;bth.index++)
     if(btn.id=<rem){
        btn.id--;
     }
 }
*/
   //FUNKCIJA PRINT
function print(myArr)
{
     document.getElementById('pText').innerHTML = myArr;
}
//if btn.onclick=true
function del(){
   

}