const database = require('../config/pet')

class ModelPet{

    constructor(){

        this.model = database.db.define('pets', {

            id:{

                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true

            },
            nome:{

                type: database.db.Sequelize.STRING

            },

            especie:{

                type: database.db.Sequelize.STRING

            },

            idade:{

                type: database.db.Sequelize.STRING

            },
        })
    }

}

module.exports = new ModelPet().model