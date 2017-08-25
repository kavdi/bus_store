'use strict';

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
};

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
};

addToCart();
addToCart();

var continueButton = document.getElementById('continueButton');
continueButton.addEventListener('click',shoppingPage);

function shoppingPage(){
  window.location.href = 'index.html';
};

var checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', goodbyePage);

function goodbyePage(){
  var body = document.getElementById('tblBody');
  body.innerHTML = '';
  window.location.href = 'goodbye.html';
};

function createDeleteEvent(){
  var deleteButton = document.getElementById('deleteButton' + rowCount);
};

function removeRow(event) {
  var row = document.getElementById(event.target.id.slice(-1));
  // debugger;
  row.parentNode.removeChild(row);
};

var allOrders = [];

function Order(name, street, city, state, zip, phone, cc, product, qty) {
  this.name = name;
  this.street = street;
  this.city = city;
  this.state = state;
  this.zip = zip;
  this.phone = phone;
  this.cc = cc;
  this.product = product;
  this.qty = qty;
};

function submitOrder(event) {
  event.preventDefault();
  var name = form.elements['name'].value;
  var street = form.elements['street'].value;
  var city = form.elements['city'].value;
  var state = form.elements['state'].value;
  var zip = form.elements['zip'].value;
  var phone = form.elements['phone'].value;
  var cc = form.elements['cc'].value;
  var product = form.elements[7].value;
  var qty = form.elements['qty'].value;
  var newEntry = new Order(name, street, city, state, zip, phone, cc, product, qty);
  allOrders.push(newEntry);
  localStorage.setItem('orders', JSON.stringify(allOrders));
  form.reset();
};

var form = document.getElementById('form');
form.addEventListener('submit', submitOrder);
