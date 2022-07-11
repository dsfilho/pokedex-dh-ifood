const ListTrainersService = require('../../services/trainers/ListTrainersService');

const UpdateTrainerService = {

    UpdateTrainerService:(
        id,
        name,
        age,
        city

    ) =>{
        const trainers = ListTrainersService.ListTrainersService();
        const trainerIndex = trainers.findIndex(item => item.id === Number(id))

        if(trainerIndex === -1){
            return {message:"Treinador não localizado"}
        }

        trainers[trainerIndex] = {
            name,
            age,
            city
        }

        return {
            id,
            ...trainers[trainerIndex]
        }

    }
}

module.exports = UpdateTrainerService