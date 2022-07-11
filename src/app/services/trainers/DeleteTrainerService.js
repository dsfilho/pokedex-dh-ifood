const ListTrainersService = require('../trainers/ListTrainersService');


const DeleteTrainerService = {

    deleteTrainer: (id) => {

    const trainers = ListTrainersService.ListTrainersService();
    const trainerIndex = trainers.findIndex(item => item.id === Number(id))

    if(trainerIndex === -1){
        return {
            message:"Treinador não localizado",
            status:false
        } 
    }
    
    trainers.splice(trainers,1);
       
    return {
        message: "Treinador removido com sucesso",
        status:true
    }

}

} 

module.exports = DeleteTrainerService;