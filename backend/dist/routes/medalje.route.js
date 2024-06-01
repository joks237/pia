"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const medalje_controller_1 = require("../controllers/medalje.controller");
const medaljeRouter = express_1.default.Router();
medaljeRouter.route('/sveMedalje').get((req, res) => new medalje_controller_1.MedaljeController().sveMedalje(req, res));
medaljeRouter.route('/dodajMedalju').post((req, res) => new medalje_controller_1.MedaljeController().dodajMedalju(req, res));
exports.default = medaljeRouter;
//# sourceMappingURL=medalje.route.js.map