"use strict";

// AddEventListener
addContact.addEventListener('click', togglePopUp);
saveContact.addEventListener('click',updateContactList);
closeBtn.addEventListener('click',() => {
	closePopUp();
	resetInputs();
});