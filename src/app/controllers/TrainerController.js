const ListTrainersService = require('../services/trainers/ListTrainersService');


const trainerController = {

    listAllTrainers:(request,response) => {
        const listTrainers = ListTrainersService.ListTrainersService();
        response.json(listTrainers)
    }
}

module.exports = trainerController;