"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discipline_1 = __importDefault(require("../models/discipline"));
const sportovi_1 = __importDefault(require("../models/sportovi"));
const user_1 = __importDefault(require("../models/user"));
const zahtevi_1 = __importDefault(require("../models/zahtevi"));
class OrganizatorController {
    constructor() {
        this.prihvatiZahtev = (req, res) => {
            let username = req.body.username;
            zahtevi_1.default.findOne({ "username": username }, (err, data) => {
                if (err)
                    console.log(err);
                else {
                    let newUser = new user_1.default({ 'username': data.get('username'), 'password': data.get('password'), 'confirmPassword': data.get('confirmPassword'), 'name': data.get('name'), 'lastname': data.get('lastname'), 'nationality': data.get('nationality'),
                        'email': data.get('email'), 'type': data.get('type') });
                    newUser.save().then(() => {
                        res.json({ 'message': 'user added' });
                    }).catch((err) => {
                        res.json({ 'message': err });
                    });
                    zahtevi_1.default.deleteOne({ 'username': username }, (err) => {
                        if (err)
                            console.log(err);
                    });
                }
            });
        };
        this.sviZahtevi = (req, res) => {
            zahtevi_1.default.find((err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.odbijZahtev = (req, res) => {
            let username = req.body.username;
            zahtevi_1.default.deleteOne({ 'username': username }, (err) => {
                if (err)
                    console.log(err);
                else
                    res.json({ 'message': 'ok' });
            });
        };
        this.dodajSport = (req, res) => {
            let sport = req.body.sport;
            let nazivDiscipline = req.body.naziv;
            let vrstaDiscipline = req.body.vrsta;
            let minBrojIgraca = req.body.min;
            let maxBrojIgraca = req.body.max;
            if (!minBrojIgraca)
                minBrojIgraca = null;
            if (!maxBrojIgraca)
                maxBrojIgraca = null;
            sportovi_1.default.findOne({ "sport": sport }, (err, data) => {
                if (err)
                    console.log("GRESKA1"); //sport postoji u bazi
                else {
                    if (data) {
                        sportovi_1.default.updateOne({ 'sport': sport }, { $push: { "disciplina": {
                                    "naziv": nazivDiscipline,
                                    "vrsta": vrstaDiscipline,
                                    "min_broj_igraca": minBrojIgraca,
                                    "max_broj_igraca": maxBrojIgraca
                                } } }, (err) => {
                            if (err)
                                console.log("GRESKA2");
                            else {
                                let newDisciplina = new discipline_1.default({
                                    "sport": sport,
                                    "naziv": nazivDiscipline,
                                    "vrsta": vrstaDiscipline,
                                    "min_broj_igraca": minBrojIgraca,
                                    "max_broj_igraca": maxBrojIgraca
                                });
                                newDisciplina.save().then(() => {
                                    res.json({ 'message': 'ok' });
                                }).catch((err) => {
                                    res.json({ 'message': err });
                                });
                            }
                        });
                    }
                    else { //dodavanje novog sporta i discipline
                        let newSport = null;
                        let message = null;
                        let message1 = null;
                        newSport = new sportovi_1.default({ 'sport': sport, 'disciplina': {
                                "naziv": nazivDiscipline,
                                "vrsta": vrstaDiscipline,
                                "min_broj_igraca": minBrojIgraca,
                                "max_broj_igraca": maxBrojIgraca
                            } });
                        newSport.save().then(() => {
                            //res.json({'message':'ok'});
                            message = 'ok';
                        }).catch((err) => {
                            //res.json({'message': err});
                            message = err;
                        });
                        let newDisciplina = new discipline_1.default({
                            "sport": sport,
                            "naziv": nazivDiscipline,
                            "vrsta": vrstaDiscipline,
                            "min_broj_igraca": minBrojIgraca,
                            "max_broj_igraca": maxBrojIgraca
                        });
                        newDisciplina.save().then(() => {
                            // res.json({'message1':'okk'});
                            message1 = 'ok';
                        }).catch((err) => {
                            // res.json({'message1': err});
                            message1 = err;
                        });
                        res.json({ 'message': message, 'message1': message1 });
                    }
                }
            });
        };
    }
}
exports.OrganizatorController = OrganizatorController;
//# sourceMappingURL=organizator.controller.js.map