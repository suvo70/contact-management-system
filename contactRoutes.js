const router = require('express').Router()
const {getAllContacts, creactContact, getContactsById , contactUpdate, deleteContact} = require('./contactController')

router.get('/', getAllContacts)
router.post('/' , creactContact)
router.get('/:id', getContactsById)
router.put('/:id' , contactUpdate)
router.delete('/:id' , deleteContact)

module.exports = router