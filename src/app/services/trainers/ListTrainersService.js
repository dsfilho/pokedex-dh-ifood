const TrainerModel = require('../../models/TrainerModel');

const ListTrainersService ={


    ListTrainersService: () =>{

        const trainer = new TrainerModel (
         1,
         'Daniel',
         '32',
         'Dias Davila'   
        )

        const trainer2 = new TrainerModel (
            1,
            'Levi',
            '20',
            'Salvador'   
           )      
       return [trainer,trainer2]
    }
}

module.exports = ListTrainersService;