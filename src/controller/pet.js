const ServicePet = require('../services/pet')

class ControllerPet{

    async GetPets(req, res){

        try {

            const pets = await ServicePet.GetPets()

            res.send({pets: pets})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

    async CreatePet(req, res){

        try {

            const {nome, especie, idade} = req.body

            const pets = await ServicePet.CreatePet(nome, especie, idade)

            res.send({msg: 'Pet adicionado com sucesso'})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

    async UpdatePet(req, res){

        try {

            const {id} = req.params

            const {nome, especie, idade} = req.body

            const pets = await ServicePet.UpdatePet(id, nome, especie, idade)

            res.send({msg: 'Pet atualizado com sucesso'})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

    async DeletePet(req, res){

        try {

            const {id} = req.params

            const pets = await ServicePet.DeletePet(id)

            res.send({msg: 'Pet deletado com sucesso'})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

}

module.exports = new ControllerPet()