import express from 'express';
import { MedaljeController } from '../controllers/medalje.controller';

const medaljeRouter = express.Router();

medaljeRouter.route('/sveMedalje').get(
    (req,res)=> new MedaljeController().sveMedalje(req,res)
);

medaljeRouter.route('/dodajMedalju').post(
    (req,res)=> new MedaljeController().dodajMedalju(req,res)
)

export default medaljeRouter;