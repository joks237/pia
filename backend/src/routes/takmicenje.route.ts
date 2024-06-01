import express, { Router } from 'express';

import { TakmicenjeController } from '../controllers/takmicenje.controller';

const takmicenjeRouter = express.Router();

takmicenjeRouter.route('/dodajTakmicenje').post(
    (req,res)=> new TakmicenjeController().dodajTakmicenje(req,res)
);

takmicenjeRouter.route('/svaTakmicenja').get(
    (req,res)=> new TakmicenjeController().svaTakmicenja(req,res)
);

takmicenjeRouter.route('/vecFormirano').post(
    (req,res) => new TakmicenjeController().vecFormirano(req,res)
)

takmicenjeRouter.route('/dodajSportistu').post(
    (req,res) => new TakmicenjeController().dodajSportistu(req,res)
    
)

takmicenjeRouter.route('/delegatTakmicenje').post(
    (req,res) => new TakmicenjeController().delegatTakmicenje(req,res)
);

takmicenjeRouter.route('/takmicenjeId').post(
    (req,res) => new TakmicenjeController().takmicenjeId(req,res)
)

takmicenjeRouter.route('/sviTakmicari').get(
    (req,res) => new TakmicenjeController().sviTakmicari(req,res)
      )

      takmicenjeRouter.route('/formiranRaspored').post(
        (req,res) => new TakmicenjeController().formiranRaspored(req,res) 
      )
export default takmicenjeRouter;