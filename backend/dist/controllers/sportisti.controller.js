"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discipline_1 = __importDefault(require("../models/discipline"));
const sportisti_1 = __importDefault(require("../models/sportisti"));
class SportistiController {
    constructor() {
        this.sviSportisti = (req, res) => {
            sportisti_1.default.find((err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sportistiIme = (req, res) => {
            let ime = req.body.ime;
            sportisti_1.default.find({ 'ime_i_prezime': ime }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sportistiZemlja = (req, res) => {
            let zemlja = req.body.zemlja;
            sportisti_1.default.find({ 'zemlja': zemlja }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sportistiZemljaISport = (req, res) => {
            let zemlja = req.body.zemlja;
            let sport = req.body.sport;
            sportisti_1.default.find({ 'zemlja': zemlja, 'sport': sport }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sportistiSport = (req, res) => {
            let sport = req.body.sport;
            sportisti_1.default.find({ 'sport': sport }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sportistiSportDisciplina = (req, res) => {
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            sportisti_1.default.find({ 'sport': sport, 'disciplina': disciplina, 'pol': pol }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sportDisciplina = (req, res) => {
            let sport = req.body.sport;
            discipline_1.default.find({ 'sport': sport }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.dodajSportistu = (req, res) => {
            let ime_i_prezime = req.body.ime_i_prezime;
            let sport = req.body.sport;
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            let zemlja = req.body.zemlja;
            let osvojio = 0;
            sportisti_1.default.find().sort({ 'idS': -1 }).limit(1).lean().exec((err, doc) => {
                if (err)
                    console.log(err);
                else {
                    let idS = doc[0].idS + 1;
                    let newSportista = new sportisti_1.default({ 'idS': idS, 'ime_i_prezime': ime_i_prezime, 'zemlja': zemlja, 'sport': sport, 'disciplina': disciplina, 'pol': pol, 'osvojio': osvojio });
                    newSportista.save().then(() => {
                        res.json({ 'message': 'ok' });
                    }).catch((err) => {
                        res.json(err);
                    });
                }
            });
        };
        this.sportistaJedanSport = (req, res) => {
            let ime_i_prezime = req.body.ime_i_prezime;
            sportisti_1.default.findOne({ 'ime_i_prezime': ime_i_prezime }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sportistiDisciplina = (req, res) => {
            let disciplina = req.body.disciplina;
            let pol = req.body.pol;
            sportisti_1.default.find({ $and: [{ 'disciplina': disciplina, 'pol': pol }] }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
    }
}
exports.SportistiController = SportistiController;
//# sourceMappingURL=sportisti.controller.js.map