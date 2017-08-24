
var yourOrders = JSON.parse(localStorage.getItem('orders'));


function createAndAppend(tag, parentVar, content, itsClass, itsId) {
  var newElement = document.createElement(tag);
  if (content) {
    newElement.innerText = content;
  }
  if (itsClass){
    newElement.className = itsClass;
  }
  if (itsId){
    newElement.setAttribute('id', itsId);
  }
  parentVar.appendChild(newElement);
  return newElement;
}

////////////////
////////////////
var rowCount = 0;
function addToCart(){
  rowCount++;
  var tableBody = document.getElementById('tblBody');
  var newRow = createAndAppend('tr', tableBody, '','',rowCount);
  for (var i = 0; i < 3; i++){
    createAndAppend('td', newRow, 'row' + rowCount);
  }
  var deleteButton = createAndAppend('td',newRow, '', '');
  deleteButton.innerHTML = '<button id="deleteButton' + rowCount + '"  >Delete</button>';
  deleteButton.addEventListener('click', removeRow);
}
addToCart();
addToCart();

////////////////Event Listeners
/////////////////
var continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click',shoppingPage);

function shoppingPage(){
  window.location.href = 'index.html';
}

var checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', goodbyePage);

function goodbyePage(){
  var body = document.getElementById('tblBody');
  body.innerHTML = '';
  window.location.href = 'goodbye.html';
}

function createDeleteEvent(){
  var deleteButton = document.getElementById('deleteButton' + rowCount);
}
function removeRow(event) {
  var row = document.getElementById(event.target.id.slice(-1));
  // debugger;
  row.parentNode.removeChild(row);
}

//
// var element = document.getElementById("element-id");
// element.parentNode.removeChild(element);
