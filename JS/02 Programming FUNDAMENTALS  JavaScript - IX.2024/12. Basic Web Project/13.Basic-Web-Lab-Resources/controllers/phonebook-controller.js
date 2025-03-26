const phonebook = require('../phonebook');
const Contact = require ('../models/Contact')

module.exports = {
  index: (req, res) => {

    let allContacts = phonebook.getPhonebook()

    res.render('index', {
      contacts: allContacts
    });
  },
  addPhonebookPost:(req, res) => {
    // TODO: add a phonebook object to the array

    let name = req.body.name
    let phoneNumber = req.body.number

     // Validate input data   ↓↓↓

     if (name === undefined || name === null || name.length < 2) {

      res.render('index', {
        contacts: phonebook.getPhonebook(),
        error: 'Invalid name value!'
      })
      return
     }

     if (phoneNumber === undefined || phoneNumber === null || phoneNumber.length < 2) {

      res.render('index', {
        error: 'Invalid phone number value!'
      })  
      return   
    }

     let newContact = new Contact (name, phoneNumber)
     phonebook.addContact(newContact)
     res.redirect('/')
  }
}