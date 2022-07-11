const ListTrainersService = require('../services/trainers/ListTrainersService');
const CreateTrainerService = require('../services/trainers/CreateTrainerService');
const UpdateTrainerService = require('../services/trainers/UpdateTrainerService');
const DeleteTrainerService = require('../services/trainers/DeleteTrainerService');
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
    },

    updateTrainer:(request,response) => {
      const {id} = request.params;
      const {
         name,
         age,
         city
      }=request.body;

      const updatedTrainer = UpdateTrainerService.UpdateTrainerService(

         id,
         name,
         age,
         city
      );
         response.json(updatedTrainer);
   },

   deleteTrainer:(request,response) => {
      const {id} =request.params;
      result = DeleteTrainerService.deleteTrainer(id);

      if(!result.status){
        return  response.status(404).json(result.message);
      }

      return response.status(200).json(result.message);

      
   }
}

module.exports = trainerController;