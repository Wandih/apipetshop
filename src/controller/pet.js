const ServicePet = require('../services/pet')

class ControllerPet{

    async GetPets(req, res){

        try {

            const pets = await ServicePet.GetPets()

            res.send({msg: pets})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

    async CreatePet(req, res){

        try {

            const nome = req.body.nome

            const especie = req.body.especie

            const idade = req.body.idade

            const pets = ServicePet.CreatePet(nome, especie, idade)

            res.send({msg: pets})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

    async UpdatePet(req, res){

        try {

            const id = req.params.id

            const nome = req.body.nome

            const especie = req.body.especie

            const idade = req.body.idade

            const pets = ServicePet.UpdatePet(id, nome, especie, idade)

            res.send({msg: pets})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

    async DeletePet(req, res){

        try {

            const id = req.params.id

            const pets = await ServicePet.DeletePet(id)

            res.send({msg: pets})
            
        } catch (error) {

            res.status(500).send({msg: error.message})
            
        }
    }

}

module.exports = new ControllerPet()