const ListLegendariesService = require('../services/legedary/ListLegendariesService');
const createLegendaryService = require('../services/legedary/CreateLegendaryService');
const UpdateLegendaryService = require ('../services/legedary/UpdateLegendaryService');
const DeletedLegendaryService = require ('../services/legedary/DeleteLegendaryService')

const controller = {
    
    index:(request, response) => {
     const listLegendaries = ListLegendariesService.listLegendariesService();
     response.json(listLegendaries)
 },

 listData:(request, response) => {

    const {name} = request.query;

    if(!name){
      return response.status(400).json({"erro":"É necessário informar o nome!"})
    }

    const legendary = ListLegendariesService.listPokemonData(name);

    return response.json(legendary);
 },

 create: (request,response) =>{
    const {
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense
    } = request.body;

    const legendary = createLegendaryService.createLegendary(
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
      );

    return response.json(legendary);
 },

 update: (request,response) =>{
  const {id} = request.params
      const {
        name,
        description,
        type,
        healthPoints,
        specialAttack,
        defense,
        attack,
        experience,
        specialDefense
    } = request.body;

    const updatedLegendary = UpdateLegendaryService.update(
      id,
      name,
      description,
      type,
      healthPoints,
      specialAttack,
      defense,
      attack,
      experience,
      specialDefense
    );
    response.json(updatedLegendary)
  },

  delete: (request,response) =>{

    const {id} = request.params;
    const resultado  = DeletedLegendaryService.delete(id);

    response.send(resultado);
  }



}

module.exports = controller;