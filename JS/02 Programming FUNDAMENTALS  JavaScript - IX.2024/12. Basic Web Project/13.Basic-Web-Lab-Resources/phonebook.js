/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

//	In-memory database ↓↓↓	The data will be lost when the application is restarted. 

var phonebook = []

function getPhonebook() {
	return phonebook
}

function addContact(contact) {
	phonebook.push(contact)
}


module.exports = {
	getPhonebook,
	addContact
}  