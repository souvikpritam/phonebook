"use strict";

//Define Variable
var contactList = [];
var storage = localStorage.getItem('phonebook');

if(storage !== null){
	contactList = JSON.parse(storage);
}

var updateIndex = 0;
var firstName = document.querySelector('#firstname');
var lastName = document.querySelector('#lastname');
var address = document.querySelector('#address');
var phone_number = document.querySelector('#phone_number');
var addContact = document.querySelector('#button');
var saveContact = document.querySelector('#saveButton');
var bg_modal = document.querySelector('.bg_modal');
var closeBtn = document.querySelector('.close');
var populateTableRow = document.querySelector("#populateTableRow");













