"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const raspored_controller_1 = require("../controllers/raspored.controller");
const rasporedRouter = express_1.default.Router();
rasporedRouter.route('/unesiVreme').post((req, res) => new raspored_controller_1.RasporedController().unesiVreme(req, res));
rasporedRouter.route('/randomAlg').post((req, res) => new raspored_controller_1.RasporedController().randomAlg(req, res));
rasporedRouter.route('/rasporedid').post((req, res) => new raspored_controller_1.RasporedController().sviRasporedi(req, res));
rasporedRouter.route('/rasporediId').post((req, res) => new raspored_controller_1.RasporedController().rasporediId(req, res));
rasporedRouter.route('/sviTakmicari').get((req, res) => new raspored_controller_1.RasporedController().sviTakmicari(req, res));
rasporedRouter.route('/dodajNoviRaspored').post((req, res) => new raspored_controller_1.RasporedController().dodajNoviRaspored(req, res));
rasporedRouter.route('/sviRasporedi').post((req, res) => new raspored_controller_1.RasporedController().sviRasporedi(req, res));
exports.default = rasporedRouter;
//# sourceMappingURL=raspored.route.js.map