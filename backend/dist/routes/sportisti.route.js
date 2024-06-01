"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportisti_controller_1 = require("../controllers/sportisti.controller");
const sportistiRuter = express_1.default.Router();
sportistiRuter.route('/sviSportisti').get((req, res) => new sportisti_controller_1.SportistiController().sviSportisti(req, res));
sportistiRuter.route('/sportistiIme').post((req, res) => new sportisti_controller_1.SportistiController().sportistiIme(req, res));
sportistiRuter.route('/sportistiZemlja').post((req, res) => new sportisti_controller_1.SportistiController().sportistiZemlja(req, res));
sportistiRuter.route('/sportistiZemljaISport').post((req, res) => new sportisti_controller_1.SportistiController().sportistiZemljaISport(req, res));
sportistiRuter.route('/sportistiSport').post((req, res) => new sportisti_controller_1.SportistiController().sportistiSport(req, res));
sportistiRuter.route('/sportDisciplina').post((req, res) => new sportisti_controller_1.SportistiController().sportDisciplina(req, res));
sportistiRuter.route('/dodajSportistu').post((req, res) => new sportisti_controller_1.SportistiController().dodajSportistu(req, res));
sportistiRuter.route('/sportistaJedanSport').post((req, res) => new sportisti_controller_1.SportistiController().sportistaJedanSport(req, res));
sportistiRuter.route('/sportistiSportDisciplina').post((req, res) => new sportisti_controller_1.SportistiController().sportistiSportDisciplina(req, res));
sportistiRuter.route('/sportistiDisciplina').post((req, res) => new sportisti_controller_1.SportistiController().sportistiDisciplina(req, res));
exports.default = sportistiRuter;
//# sourceMappingURL=sportisti.route.js.map