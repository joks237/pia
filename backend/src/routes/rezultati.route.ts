import express from 'express';
import { RezultatiController } from '../controllers/rezultati.controller';

const rezultatiRouter = express.Router();

rezultatiRouter.route('/unosBacanjeSkokovi').post(
    (req,res) => new RezultatiController().unosBacanjeSkokovi(req,res)
)



rezultatiRouter.route('/prvaTri').post(
    (req,res) => new RezultatiController().prvaTri(req,res)
)
rezultatiRouter.route('/unosMaleTrkePlivanje').post(
    (req,res) => new RezultatiController().unosMaleTrkePlivanje(req,res)
);

rezultatiRouter.route('/sviRezMaleTrke').post(
    (req,res) => new RezultatiController().sviRezMaleTrke(req,res)
)

rezultatiRouter.route('/sviRezVelikeTrke').post(
    (req,res) => new RezultatiController().sviRezVelikeTrke(req,res)
);

rezultatiRouter.route('/unosVelikeTrke').post(
    (req,res) => new RezultatiController().unosVelikeTrke(req,res)
);

rezultatiRouter.route('/sviRezVeceTrke').post(
    (req,res) => new RezultatiController().sviRezVeceTrke(req,res)
);

rezultatiRouter.route('/unosVeceTrke').post(
    (req,res) => new RezultatiController().unosVeceTrke(req,res)
);

rezultatiRouter.route('/sviRezStreljastvo').post(
    (req,res) => new RezultatiController().sviRezStreljastvo(req,res)
);

rezultatiRouter.route('/unosStreljastvo').post(
    (req,res) => new RezultatiController().unosStreljastvo(req,res)
);

rezultatiRouter.route('/unosTenis').post(
    (req,res) => new RezultatiController().unosTenis(req,res)

)
rezultatiRouter.route('/sviRezTenis').post(
    (req,res) => new RezultatiController().sviRezTenis(req,res)

)

export default rezultatiRouter;