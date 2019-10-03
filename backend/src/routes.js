const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const BookingController = require('./controllers/BookingController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.post('/signup', SessionController.store);
routes.get('/spots', SpotController.index);
routes.get('/myspots', SpotController.show);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.post('/spots/:spot/bookings', BookingController.store);

module.exports = routes;
