const Router = require('express');
const { route } = require('./app');
const multerConfig = require('./config/multer');

const controller = require('./app/controllers/LegendaryController');
const uploadFileController = require('./app/controllers/UploadFileController');
const trainerController = require('./app/controllers/TrainerController');
const multer = require('multer');

const uploadFile = multer({storage:multerConfig});

const routes = new Router();

//routes.get("/legendaries",controller.index);

routes.get("/legendaries/",controller.listData);
routes.post("/legendaries/",controller.create);
routes.put('/legendaries/:id',controller.update);
routes.delete('/legendaries/:id',controller.delete);
routes.post('/uploads',uploadFile.single('file'),uploadFileController.storeFile);

routes.get('/trainers/',trainerController.listAllTrainers);
routes.post('/trainer',trainerController.createTrainer);
routes.put('/trainer/:id',trainerController.updateTrainer);
routes.delete('/trainer/:id',trainerController.deleteTrainer);
module.exports = routes;