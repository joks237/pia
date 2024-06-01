"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const rezultati_controller_1 = require("../controllers/rezultati.controller");
const rezultatiRouter = express_1.default.Router();
rezultatiRouter.route('/unosBacanjeSkokovi').post((req, res) => new rezultati_controller_1.RezultatiController().unosBacanjeSkokovi(req, res));
rezultatiRouter.route('/prvaTri').post((req, res) => new rezultati_controller_1.RezultatiController().prvaTri(req, res));
rezultatiRouter.route('/unosMaleTrkePlivanje').post((req, res) => new rezultati_controller_1.RezultatiController().unosMaleTrkePlivanje(req, res));
rezultatiRouter.route('/sviRezMaleTrke').post((req, res) => new rezultati_controller_1.RezultatiController().sviRezMaleTrke(req, res));
rezultatiRouter.route('/sviRezVelikeTrke').post((req, res) => new rezultati_controller_1.RezultatiController().sviRezVelikeTrke(req, res));
rezultatiRouter.route('/unosVelikeTrke').post((req, res) => new rezultati_controller_1.RezultatiController().unosVelikeTrke(req, res));
rezultatiRouter.route('/sviRezVeceTrke').post((req, res) => new rezultati_controller_1.RezultatiController().sviRezVeceTrke(req, res));
rezultatiRouter.route('/unosVeceTrke').post((req, res) => new rezultati_controller_1.RezultatiController().unosVeceTrke(req, res));
rezultatiRouter.route('/sviRezStreljastvo').post((req, res) => new rezultati_controller_1.RezultatiController().sviRezStreljastvo(req, res));
rezultatiRouter.route('/unosStreljastvo').post((req, res) => new rezultati_controller_1.RezultatiController().unosStreljastvo(req, res));
rezultatiRouter.route('/unosTenis').post((req, res) => new rezultati_controller_1.RezultatiController().unosTenis(req, res));
rezultatiRouter.route('/sviRezTenis').post((req, res) => new rezultati_controller_1.RezultatiController().sviRezTenis(req, res));
exports.default = rezultatiRouter;
//# sourceMappingURL=rezultati.route.js.map