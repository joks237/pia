import express from 'express';
import { OrganizatorController } from '../controllers/organizator.controller';

const organizatorRuter = express.Router();

organizatorRuter.route('/prihvatiZahtev').post(
    (req,res) => new OrganizatorController().prihvatiZahtev(req,res)
);

organizatorRuter.route('/sviZahtevi').get(
    (req,res) => new OrganizatorController().sviZahtevi(req,res)
);
organizatorRuter.route('/odbijZahtev').post(
    (req,res) => new OrganizatorController().odbijZahtev(req,res)
);

organizatorRuter.route('/dodajSport').post(
    (req,res) => new OrganizatorController().dodajSport(req,res)
);

export default organizatorRuter;
