"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const organizator_controller_1 = require("../controllers/organizator.controller");
const organizatorRuter = express_1.default.Router();
organizatorRuter.route('/prihvatiZahtev').post((req, res) => new organizator_controller_1.OrganizatorController().prihvatiZahtev(req, res));
organizatorRuter.route('/sviZahtevi').get((req, res) => new organizator_controller_1.OrganizatorController().sviZahtevi(req, res));
organizatorRuter.route('/odbijZahtev').post((req, res) => new organizator_controller_1.OrganizatorController().odbijZahtev(req, res));
organizatorRuter.route('/dodajSport').post((req, res) => new organizator_controller_1.OrganizatorController().dodajSport(req, res));
exports.default = organizatorRuter;
//# sourceMappingURL=organizator.route.js.map