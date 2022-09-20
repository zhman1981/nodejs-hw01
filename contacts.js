const fs = require('fs').promises;
const path = require('path');
const contactsPath = path.dirname('./db/contacts.json') + '/' + path.basename('./db/contacts.json');

function listContacts() {
    fs.readFile(contactsPath)
        .then(data => console.log(JSON.parse(data)))
        .catch(err => console.log(err.message));
}

function getContactById(contactId) {
    fs.readFile(contactsPath)
        .then(data => console.log(JSON.parse(data).find(contact => contact.id === contactId)))
    .catch(err => console.log(err.message));
 }

function removeContact(contactId) {
    fs.readFile(contactsPath)
        .then(data => {
            fs.writeFile(contactsPath, JSON.stringify(JSON.parse(data).filter(contact => contact.id !== contactId)), 'utf8')
                .then(() => console.log(`Contact with ID ${contactId} deleted`))
                .catch(console.error)
        })
        .catch(err => console.log(err.message));
}

function addContact(name, email, phone) {
  fs.readFile(contactsPath)
        .then(data => {
            fs.writeFile(contactsPath, JSON.stringify([...JSON.parse(data), {'id': "11",name,email,phone}]), 'utf8')
                .then(() => console.log(`Add new contact`))
                .catch(console.error)
        })
        .catch(err => console.log(err.message));
}

module.exports = { listContacts, getContactById, removeContact, addContact };