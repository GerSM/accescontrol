const express = require('express')

const {
    getAllRegitrations, 
    getRegistrationById, 
    createRegistration, 
    updateRegistration,
    cancelRegistration
} = require ('../controllers/registration.controller')

const registrationsRouter = express.Router()

registrationsRouter.get('/', getAllRegitrations)

registrationsRouter.get('/:id', getRegistrationById)

registrationsRouter.post('/', createRegistration)

registrationsRouter.patch('/:id', updateRegistration)

registrationsRouter.delete('/:id', cancelRegistration)

module.exports = { registrationsRouter }