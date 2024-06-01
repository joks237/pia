"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const takmicenje_controller_1 = require("../controllers/takmicenje.controller");
const takmicenjeRouter = express_1.default.Router();
takmicenjeRouter.route('/dodajTakmicenje').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dodajTakmicenje(req, res));
takmicenjeRouter.route('/svaTakmicenja').get((req, res) => new takmicenje_controller_1.TakmicenjeController().svaTakmicenja(req, res));
takmicenjeRouter.route('/vecFormirano').post((req, res) => new takmicenje_controller_1.TakmicenjeController().vecFormirano(req, res));
takmicenjeRouter.route('/dodajSportistu').post((req, res) => new takmicenje_controller_1.TakmicenjeController().dodajSportistu(req, res));
takmicenjeRouter.route('/delegatTakmicenje').post((req, res) => new takmicenje_controller_1.TakmicenjeController().delegatTakmicenje(req, res));
takmicenjeRouter.route('/takmicenjeId').post((req, res) => new takmicenje_controller_1.TakmicenjeController().takmicenjeId(req, res));
takmicenjeRouter.route('/sviTakmicari').get((req, res) => new takmicenje_controller_1.TakmicenjeController().sviTakmicari(req, res));
takmicenjeRouter.route('/formiranRaspored').post((req, res) => new takmicenje_controller_1.TakmicenjeController().formiranRaspored(req, res));
exports.default = takmicenjeRouter;
//# sourceMappingURL=takmicenje.route.js.map