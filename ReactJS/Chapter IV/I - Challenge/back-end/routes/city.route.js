import express from 'express';
import CityController from '../controllers/city.controller.js';

const router = express.Router();

router.get('/:id', CityController.getCities);

export default router;
