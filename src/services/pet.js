const ModelPet = require('../model/pet')

class ServicePet{

    async GetPets(){

        return ModelPet.findAll()
    }

    CreatePet(nome, especie, idade){

        return ModelPet.create(
            {
                nome: nome, 
                especie: especie, 
                idade: idade
            })
    }

    UpdatePet(id, nome, especie, idade){

        return ModelPet.update(
            {
                nome: nome, 
                especie: especie, 
                idade: idade
            },
            {   

                where: {
                    id: id
                }
            })
    }

    

    DeletePet(id){

        return ModelPet.destroy(
            {
                where:{
                    id: id
                }
            })

    }

}

module.exports = new ServicePet()