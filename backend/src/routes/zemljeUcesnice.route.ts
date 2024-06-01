import express from 'express';
import { ZemljeController } from '../controllers/zemlje.controller';


const zemljeRouter = express.Router();

zemljeRouter.route('/ucesnice').get(
    (req,res)=> new ZemljeController().ucesnice(req,res)
);


export default zemljeRouter;