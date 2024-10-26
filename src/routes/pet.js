const express = require('express')
const ControllerPet = require('../controller/pet')

const router = express.Router()

router.get('/', ControllerPet.GetPets)
router.post('/', ControllerPet.CreatePet)
router.put('/:id', ControllerPet.UpdatePet)
router.delete('/:id', ControllerPet.DeletePet)

module.exports = router