"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const takmicar_1 = __importDefault(require("../models/takmicar"));
const takmicenje_1 = __importDefault(require("../models/takmicenje"));
class TakmicenjeController {
    constructor() {
        this.dodajTakmicenje = (req, res) => {
            let brojDelegata;
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let vrsta = req.body.vrsta;
            let pol = req.body.pol;
            let datum_poc = req.body.datum_poc;
            let datum_kraj = req.body.datum_kraj;
            let lokacija = req.body.lokacija;
            let delegat = req.body.delegat;
            takmicenje_1.default.find({ 'delegat': delegat }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    brojDelegata = data.length;
            });
            takmicenje_1.default.find().sort({ 'idT': -1 }).limit(1).lean().exec((err, doc) => {
                if (err)
                    console.log(err);
                else {
                    if (brojDelegata < 3) {
                        let idT = doc[0].idT + 1;
                        let newTak = new takmicenje_1.default({
                            'idT': idT, 'sport': sport, 'disciplina': disciplina, 'vrsta': vrsta, 'pol': pol,
                            'datum_pocetka': datum_poc, 'datum_kraja': datum_kraj,
                            'lokacija': lokacija, 'delegat': delegat, 'formiranRaspored': 0
                        });
                        newTak.save();
                        res.json({ 'message': 'ok' });
                    }
                    else {
                        res.json({ 'message': 'izaberite drugog delegata' });
                    }
                }
            });
        };
        this.svaTakmicenja = (req, res) => {
            takmicenje_1.default.find((err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.vecFormirano = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            takmicenje_1.default.findOne({ 'sport': sport, 'disciplina': disciplina }, (err, data) => {
                if (err)
                    console.log(err);
                else {
                    if (data)
                        res.json({ 'message': 'Takmicenje je formirano' });
                    else
                        res.json({ 'message': 'ok' });
                }
            });
        };
        this.dodajSportistu = (req, res) => {
            let idS = req.body.idS;
            let disciplina = req.body.disciplina;
            let ime_i_prezime = req.body.ime_i_prezime;
            let pol = req.body.pol;
            takmicenje_1.default.findOne({ 'disciplina': disciplina }, (err, data) => {
                if (err)
                    console.log(err);
                else {
                    if (data) {
                        takmicenje_1.default.updateOne({ $and: [{ 'disciplina': disciplina, 'pol': pol }] }, { $push: {
                                'takmicari': {
                                    'idS': idS,
                                    'ime_i_prezime': ime_i_prezime
                                }
                            } }, (err) => {
                            if (err)
                                console.log("GRESKA2");
                        });
                    }
                }
            });
            let newTakmicar = new takmicar_1.default({ 'idS': idS, 'ime_i_prezime': ime_i_prezime });
            newTakmicar.save();
            res.json({ 'message': 'ok' });
        };
        this.delegatTakmicenje = (req, res) => {
            let delegat = req.body.delegat;
            takmicenje_1.default.find({ 'delegat': delegat }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.takmicenjeId = (req, res) => {
            let idT = req.body.idT;
            takmicenje_1.default.findOne({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
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
        this.formiranRaspored = (req, res) => {
            let idT = req.body.idT;
            takmicenje_1.default.updateOne({ 'idT': idT }, { $set: { 'formiranRaspored': 1 } }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
    }
}
exports.TakmicenjeController = TakmicenjeController;
//# sourceMappingURL=takmicenje.controller.js.map