const ListTrainersService = require('../services/trainers/ListTrainersService');
const CreateTrainerService = require('../services/trainers/CreateTrainerService');
let messageStatusService;
const trainerController = {

    listAllTrainers:(request,response) => {
        const listTrainers = ListTrainersService.ListTrainersService();
        response.json(listTrainers)
    },

    createTrainer:(request,response) =>{
    const {
            name,
            age,
            city
        } = request.body;

     if(!name){
         messageStatusService ={
            message: "É necessário informar o nome."
         }
        return response.status(400).json(messageStatusService.message);
      }

     if(!age){
      messageStatusService ={
         message: "É necessário informar a idade."
      }
        return response.status(400).json(messageStatusService.message);
     }

     if(!city){
      messageStatusService ={
         message: "É necessário informar a cidade."
      }
        return response.status(400).json(messageStatusService.message);
     }
        const trainer = CreateTrainerService.CreateTrainerService(name,age,city);
        
       if(!trainer.status){
          return response.status(400).json(trainer.message);
        }
        return response.status(200).json(trainer.message); 
    }
}

module.exports = trainerController;