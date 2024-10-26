const ModelPet = require('../model/pet')

class ServicePet{

    async GetPets(){

        return ModelPet.findAll()
    }

    CreatePet(nome, especie, idade){

        return ModelPet.CreatePet(nome, especie, idade)
    }

    UpdatePet(id, nome, especie, idade){

        return ModelPet.UpdatePet(id, nome, especie, idade)
    }

    DeletePet(id){

        return ModelPet.DeletePet(id)

    }

}

module.exports = new ServicePet()