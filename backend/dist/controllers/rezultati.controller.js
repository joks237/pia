"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rez_velike_trke_1 = __importDefault(require("../models/rez_velike_trke"));
const rezMaleTrkePlivanje_1 = __importDefault(require("../models/rezMaleTrkePlivanje"));
const rezSkokBacanje_1 = __importDefault(require("../models/rezSkokBacanje"));
const rezVeceTrke_1 = __importDefault(require("../models/rezVeceTrke"));
const rezStreljastvo_1 = __importDefault(require("../models/rezStreljastvo"));
const rezTenis_1 = __importDefault(require("../models/rezTenis"));
class RezultatiController {
    constructor() {
        this.unosBacanjeSkokovi = (req, res) => {
            let idT = req.body.idT;
            let nazivRasporeda = req.body.nazivRasporeda;
            let idS = req.body.idS;
            let prvi = req.body.prvi;
            let drugi = req.body.drugi;
            let treci = req.body.treci;
            let newRezultatSkokBacanje = new rezSkokBacanje_1.default({ 'idT': idT, 'nazivRasporeda': nazivRasporeda, 'idS': idS, 'prvi': prvi, 'drugi': drugi, 'treci': treci });
            newRezultatSkokBacanje.save().then(() => {
                res.json({ 'message': 'ok' });
            }).catch((err) => {
                res.json(err);
            });
        };
        this.prvaTri = (req, res) => {
            let idT = req.body.idT;
            rezSkokBacanje_1.default.find({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.unosMaleTrkePlivanje = (req, res) => {
            let idT = req.body.idT;
            let nazivRasporeda = req.body.nazivRasporeda;
            let idS = req.body.idS;
            let rezultat = req.body.rezultat;
            let newMaleTrkePlivanje = new rezMaleTrkePlivanje_1.default({ 'idT': idT, 'nazivRasporeda': nazivRasporeda, 'idS': idS, 'rezultat': rezultat });
            newMaleTrkePlivanje.save().then(() => {
                res.json({ 'message': 'ok' });
            }).catch((err) => {
                res.json(err);
            });
        };
        this.sviRezMaleTrke = (req, res) => {
            let idT = req.body.idT;
            rezMaleTrkePlivanje_1.default.find({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.unosVelikeTrke = (req, res) => {
            let idT = req.body.idT;
            let nazivRasporeda = req.body.nazivRasporeda;
            let idS = req.body.idS;
            let rezultat = req.body.rezultat;
            let newVelikeTrke = new rez_velike_trke_1.default({ 'idT': idT, 'nazivRasporeda': nazivRasporeda, 'idS': idS, 'rezultat': rezultat });
            newVelikeTrke.save().then(() => {
                res.json({ 'message': 'ok' });
            }).catch((err) => {
                res.json(err);
            });
        };
        this.sviRezVelikeTrke = (req, res) => {
            let idT = req.body.idT;
            rez_velike_trke_1.default.find({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sviRezVeceTrke = (req, res) => {
            let idT = req.body.idT;
            rezVeceTrke_1.default.find({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.unosVeceTrke = (req, res) => {
            let idT = req.body.idT;
            let nazivRasporeda = req.body.nazivRasporeda;
            let idS = req.body.idS;
            let rezultat = req.body.rezultat;
            let newVeceTrke = new rezVeceTrke_1.default({ 'idT': idT, 'nazivRasporeda': nazivRasporeda, 'idS': idS, 'rezultat': rezultat });
            newVeceTrke.save().then(() => {
                res.json({ 'message': 'ok' });
            }).catch((err) => {
                res.json(err);
            });
        };
        this.sviRezStreljastvo = (req, res) => {
            let idT = req.body.idT;
            rezStreljastvo_1.default.find({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.unosStreljastvo = (req, res) => {
            let idT = req.body.idT;
            let nazivRasporeda = req.body.nazivRasporeda;
            let idS = req.body.idS;
            let s1 = req.body.s1;
            let s2 = req.body.s2;
            let s3 = req.body.s3;
            let s4 = req.body.s4;
            let s5 = req.body.s5;
            let s6 = req.body.s6;
            let newStreljastvo = new rezStreljastvo_1.default({ 'idT': idT, 'nazivRasporeda': nazivRasporeda, 'idS': idS, 's1': s1, 's2': s2,
                's3': s3, 's4': s4, 's5': s5, 's6': s6 });
            newStreljastvo.save().then(() => {
                res.json({ 'message': 'ok' });
            }).catch((err) => {
                res.json(err);
            });
        };
        this.unosTenis = (req, res) => {
            let idT = req.body.idT;
            let nazivRasporeda = req.body.nazivRasporeda;
            let idS = req.body.idS;
            let rezultat = req.body.rezultat;
            let newTenis = new rezTenis_1.default({ 'idT': idT, 'nazivRasporeda': nazivRasporeda, 'idS': idS, 'rezultat': rezultat });
            newTenis.save().then(() => {
                res.json({ 'message': 'ok' });
            }).catch((err) => {
                res.json(err);
            });
        };
        this.sviRezTenis = (req, res) => {
            let idT = req.body.idT;
            rezTenis_1.default.find({ 'idT': idT }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
    }
}
exports.RezultatiController = RezultatiController;
//# sourceMappingURL=rezultati.controller.js.map