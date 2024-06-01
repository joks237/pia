import express from 'express';
import { SportoviController } from '../controllers/sportovi.controller';

const sportoviRouter = express.Router();


sportoviRouter.route('/sviSportovi').get(
    (req,res) => new SportoviController().sviSportovi(req,res)
);

sportoviRouter.route('/sveDiscipline').get(
    (req,res) => new SportoviController().sveDiscipline(req,res)
);

export default sportoviRouter;