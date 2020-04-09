var enterButton = document.getElementById("enter");
var input = document.getElementById("inputText");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


// var myArr = [];
 var i = 0;

function inputLength() {
    return input.value.length;
}

function createListElement() {
    
    var li = document.createElement("li"); // creates an element "li"
    li.id=i;
    i++;
    li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul
    input.value = ""; //Reset text input field
    //console.log("li index:"+i);
    
    var delBtn = document.createElement("button");
    delBtn.appendChild(document.createTextNode("X"));
    li.appendChild(delBtn);
    delBtn.addEventListener("click", () => deleteListItem(li));

//////////////////////////////////////////////////////////////////////////////////

    var x = document.createElement("INPUT");
    x.setAttribute("type", "checkbox");
    li.appendChild(x);
    x.id=i;
    i++;
    console.log('ID', i);

    function name(elem){
        elem.parentNode.style.backgroundColor = elem.checked ? '#373A28' : '#303B4F'
    }

    x.addEventListener("click", () => name(x));//click 

    
    function deleteListItem(element) {
        element.parentNode.removeChild(element);
    }
}
//////////////////////////////////////////////////////////////////////////////////
function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addTaskOnKeyPress(event){
    if (event.keyCode === 13 && inputLength() > 0) {
        event.preventDefault();
        createListElement();
    }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keyup", addTaskOnKeyPress);