'use strict';

if (localStorage.getItem('orders')) {
  var allOrders = JSON.parse(localStorage.getItem('orders'));
} else {
  var allOrders = [];
};

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
  window.location.href = 'cart.html';
  form.reset();
};

var form = document.getElementById('form');
form.addEventListener('submit', submitOrder);
