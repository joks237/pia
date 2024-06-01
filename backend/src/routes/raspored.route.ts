import express from 'express';
import { RasporedController } from '../controllers/raspored.controller';

const rasporedRouter = express.Router();

rasporedRouter.route('/unesiVreme').post(
    (req,res) => new RasporedController().unesiVreme(req,res)
);

rasporedRouter.route('/randomAlg').post(
    (req,res) => new RasporedController().randomAlg(req,res)
)
rasporedRouter.route('/rasporedid').post(
    (req,res) => new RasporedController().sviRasporedi(req,res)
)

rasporedRouter.route('/rasporediId').post(
    (req,res) => new RasporedController().rasporediId(req,res)
)

rasporedRouter.route('/sviTakmicari').get(
    (req,res) => new RasporedController().sviTakmicari(req,res)

)
rasporedRouter.route('/dodajNoviRaspored').post(
    (req,res) => new RasporedController().dodajNoviRaspored(req,res)
)

rasporedRouter.route('/sviRasporedi').post(
    (req,res) => new RasporedController().sviRasporedi(req,res)

)
export default rasporedRouter;