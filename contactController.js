// const { contacts } = require('./Contacts')
const contact = require('./Contacts')

exports.getAllContacts = (req , res)=>{
    res.json(contact.getAllConytacts())
}

exports.creactContact = (req , res) =>{
    let {name , phone , email} = req.body

    let contactList = contact.creactContact({
        name , phone , email
    })

    res.json(contactList)
}

exports.getContactsById = (req , res) =>{
    let {id} = req.params
    id = parseInt(id)

    const contactId = contact.getContactId(id)

    res.json(contactId)
}

exports.contactUpdate = (req , res) =>{
    let {id} = req.params
    id = parseInt(id)

    let {name , phone , email} = req.body

    let update = contact.updateContactById(id , {
        name , phone , email
    })

    res.json(update)

}

exports.deleteContact = (req , res) =>{
     let {id} = req.params
      id = parseInt(id)

    let deleteList = contact.deleteContactById(id)

    res.json(deleteList)

}