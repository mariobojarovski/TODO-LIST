var enterButton = document.getElementById("enter");
var input = document.getElementById("inputText");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


// var myArr = [];
// let i = 0;

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li"); // creates an element "li"
 li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
  ul.appendChild(li); //adds li to ul
  input.value = ""; //Reset text input field

  var delBtn = document.createElement("button");
  delBtn.appendChild(document.createTextNode("X"));
  li.appendChild(delBtn);
  delBtn.addEventListener("click", () => deleteListItem(li));
  // delBtn.index = i;
  // console.log(delBtn.index);
  // i++;
  // myArr.push(i);

  function deleteListItem(element) {
    // console.log("before pop", i, myArr);
    // myArr.pop(i);
    // console.log("after pop", i, myArr);
    element.parentNode.removeChild(element);
  }
}
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
function check(event) {
  if (event.which === 13) {
   event.createListElement();
  }
}

enterButton.addEventListener("click", addListAfterClick);
enterButton.addEventListener("keyup", check(event));
