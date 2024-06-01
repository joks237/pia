"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const raspored_1 = __importDefault(require("../models/raspored"));
const takmicar_1 = __importDefault(require("../models/takmicar"));
class RasporedController {
    constructor() {
        this.randomAlg = (req, res) => {
            let naziv = req.body.naziv;
            let idT = req.body.idT;
            let takmicari = req.body.takmicari;
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let lokacija = req.body.lokacija;
            let newRaspored = new raspored_1.default({ 'naziv': naziv, 'idT': idT, 'takmicari': takmicari, 'sport': sport, 'disciplina': disciplina,
                'pol': pol, 'lokacija': lokacija, 'datum': null, 'vreme_pocetka': null, 'formiran': 0 });
            newRaspored.save();
            res.json({ 'message': 'ok' });
        };
        this.unesiVreme = (req, res) => {
            let idT = req.body.idT;
            let lokacija = req.body.lokacija;
            let vreme_pocetka = req.body.vreme_pocetka;
            let datum = req.body.datum;
            let naziv = req.body.naziv;
            raspored_1.default.findOne({ $and: [{ 'lokacija': lokacija, 'vreme_pocetka': vreme_pocetka }] }, (err, data) => {
                if (err)
                    console.log(err);
                else {
                    if (data) {
                        res.json({ 'message': 'Vec postoji takmicenje u to vreme na toj lokaciji' });
                    }
                    else {
                        raspored_1.default.updateOne({ $and: [{ 'idT': idT, 'naziv': naziv }] }, { $set: { 'vreme_pocetka': vreme_pocetka, 'datum': datum } }, (err) => {
                            if (err)
                                console.log(err);
                            else
                                res.json({ 'message': 'Uspesno ste dodali vreme pocetka' });
                        });
                    }
                }
            });
        };
        this.sviRasporedi = (req, res) => {
            let idT = req.body.idT;
            let naziv = req.body.naziv;
            raspored_1.default.findOne({ 'idT': idT, 'naziv': naziv }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.rasporediId = (req, res) => {
            let idT = req.body.idT;
            raspored_1.default.find({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.dodajNoviRaspored = (req, res) => {
            let idT = req.body.idT;
            let takmicari = req.body.takmicari;
            let naziv = req.body.naziv;
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let lokacija = req.body.lokacija;
            let formiran = 0;
            let newRaspored = new raspored_1.default({ 'idT': idT, 'takmicari': takmicari, 'naziv': naziv, 'sport': sport, 'disciplina': disciplina,
                'pol': pol, 'lokacija': lokacija, 'formiran': formiran, 'datum': null, 'vreme_pocetka': null });
            newRaspored.save().then(() => {
                res.json({ 'message': 'ok' });
            }).catch((err) => {
                res.json(err);
            });
        };
        this.sviTakmicari = (req, res) => {
            takmicar_1.default.find((err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
    }
}
exports.RasporedController = RasporedController;
//# sourceMappingURL=raspored.controller.js.map