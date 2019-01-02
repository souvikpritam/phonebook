"use strict";

/* ### Function #### */

//TogglePopUp
function togglePopUp(){
	let flag = bg_modal.classList.contains('popup-visible');

	if(!flag){
		bg_modal.classList.add('popup-visible');
	}else{
		bg_modal.classList.remove('popup-visible');
	}
}


//closePopUp
function closePopUp(){
	bg_modal.classList.remove('popup-visible');
}

//storeContactList
function storeContactList(){
	localStorage.setItem('phonebook',JSON.stringify(contactList));
}

//Render Contactlist

function renderContacts() {
	//console.log(contactList);
	let content = '';
	var noOfContact,i;
	noOfContact = contactList.length;

	
	for(i = 0; i<contactList.length; i++) {
		content += '<tr>';
			content += '<td>'+ contactList[i].firstName +'</td>';
			content += '<td>'+ contactList[i].lastName +'</td>';
			content += '<td>'+ contactList[i].address +'</td>';
			content += '<td>'+ contactList[i].phone_number +'</td>';
			content += '<td>'+ "<a href='javascript:void(0);' onClick='editContact("+contactList[i].ID+")' class='btn btn-sm btn-info'><i class='far fa-edit'></i></a>" + " " + "<a href='javascript:void(0);' onClick='deleteContact("+contactList[i].ID+")' class='btn btn-sm btn-danger'><i class='far fa-trash-alt'></i></a>" +'</td>';

		content += '</tr>';
	}
	populateTableRow.innerHTML = content;	
}

renderContacts();


// Update Contact List
function updateContactList(){
	let buttonState = saveContact.innerHTML;
	
	if(validateInputs() == false){
		return false;
	}

	if(buttonState === 'Save Contact'){
		let contact = {
			ID : generateID(),
			firstName : firstName.value,
			lastName : lastName.value,
			address : address.value,
			phone_number : phone_number.value,
		};

		contactList.push(contact);
		storeContactList();

	} else {
		var permission = confirm("Want to update?");

		if(permission == true){
			let obj = contactList[updateIndex];
			
			obj.firstName = firstName.value;
			obj.lastName = lastName.value;
			obj.address = address.value;
			obj.phone_number = phone_number.value;
			contactList[updateIndex] = obj;
		}
	}

	togglePopUp();
	storeContactList();
	renderContacts();
	resetInputs();
}


// Get The INDEX 
function getContactIndex(ID){
	let contactIndex = undefined;
	contactList.forEach(function(item, index, array) {
		if(item.ID == ID){
			contactIndex = index;
		}
	});

	return contactIndex;
}

// Edit Contact
function editContact(ID){
	updateIndex = getContactIndex(ID);	
	firstName.value = contactList[updateIndex].firstName;
	lastName.value = contactList[updateIndex].lastName;
	address.value = contactList[updateIndex].address;
	phone_number.value = contactList[updateIndex].phone_number;
	saveContact.innerHTML = 'Update Contact';

	togglePopUp();
}


// Delete Contact
function deleteContact(ID){
	let index = getContactIndex(ID);	
	var permission = confirm("Want to delete?");
	
	if(permission == true){
		contactList.splice(index,1);

		storeContactList();
		renderContacts();	
	}
	
}

// Generate ID
function generateID(){
	return new Date().getTime();
}

// Validate Inputs
function validateInputs(){
	let flag = true;
	if(firstName.value.length == 0){
		flag = false;
		firstName.classList.add('field-error');
	}else{
		firstName.classList.remove('field-error');
	}

	if(lastName.value.length == 0){
		flag = false;
		lastName.classList.add('field-error');
	}else{
		lastName.classList.remove('field-error');
	}

	if(address.value.length == 0){
		flag = false;
		address.classList.add('field-error');
	}else{
		address.classList.remove('field-error');
	}

	if(phone_number.value.length == 0){
		flag = false;
		phone_number.classList.add('field-error');
	}else{
		phone_number.classList.remove('field-error');
	}

	return flag;
}


// reset Inputs
function resetInputs(){
	firstName.value = '';
	firstName.classList.remove('field-error');

	lastName.value = '';
	lastName.classList.remove('field-error');

	address.value = '';
	address.classList.remove('field-error');

	phone_number.value = '';
	phone_number.classList.remove('field-error');

	saveContact.innerHTML = 'Save Contact';
}


/* ### Function #### */