import express from 'express';
import { SportistiController } from '../controllers/sportisti.controller';

const sportistiRuter = express.Router();

sportistiRuter.route('/sviSportisti').get(
    (req, res) => new SportistiController().sviSportisti(req,res)
);

sportistiRuter.route('/sportistiIme').post(
    (req, res) => new SportistiController().sportistiIme(req,res)
);

sportistiRuter.route('/sportistiZemlja').post(
    (req, res) => new SportistiController().sportistiZemlja(req,res)
);

sportistiRuter.route('/sportistiZemljaISport').post(
    (req, res) => new SportistiController().sportistiZemljaISport(req,res)
)

sportistiRuter.route('/sportistiSport').post(
    (req, res) => new SportistiController().sportistiSport(req,res)
)
sportistiRuter.route('/sportDisciplina').post(
    (req, res) => new SportistiController().sportDisciplina(req,res)
)

sportistiRuter.route('/dodajSportistu').post(
    (req, res) => new SportistiController().dodajSportistu(req,res)
)



sportistiRuter.route('/sportistaJedanSport').post(
    (req, res) => new SportistiController().sportistaJedanSport(req,res)
)

sportistiRuter.route('/sportistiSportDisciplina').post(
    (req, res) => new SportistiController().sportistiSportDisciplina(req,res)
)

sportistiRuter.route('/sportistiDisciplina').post(
    (req,res) => new SportistiController().sportistiDisciplina(req,res)
);




export default sportistiRuter;
