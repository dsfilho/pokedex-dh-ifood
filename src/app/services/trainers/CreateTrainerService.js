const TrainerModel = require('../../models/TrainerModel');
const {v4} = require('uuid');
let messageStatus;
const CreateTrainerService = {

    CreateTrainerService: (name,age,city) => {

   if(name.length < 5) {
    return messageStatus= {
        status:false,
        message:"O nome precisa ter pelo menos 5 caracteres."
    }
   }

   if(age < 15 && age <=40){

        return messageStatus= {

            status:false,
            message:"A idade precisa ser maior que 15 e menor que 40"
        }
   }


   if((city!="pallet") && (city !="vermelion")){
    return messageStatus = {
        status:false,
        message:"A cidade precisa ser Pallet ou Vermelion"
    }
   }
   

    const newTrainer = new TrainerModel(v4(),name,age,city);
    return  messageStatus ={

            status: true,
            message: newTrainer
        }
       
    }

}

module.exports = CreateTrainerService