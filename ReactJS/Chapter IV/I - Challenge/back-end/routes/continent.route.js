import express from 'express';
import ContinentController from '../controllers/continent.controller.js';

const router = express.Router();

router.get('/', ContinentController.getContinents);
router.get('/:id', ContinentController.getContinent);

export default router;
