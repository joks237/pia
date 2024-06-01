"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sportovi_controller_1 = require("../controllers/sportovi.controller");
const sportoviRouter = express_1.default.Router();
sportoviRouter.route('/sviSportovi').get((req, res) => new sportovi_controller_1.SportoviController().sviSportovi(req, res));
sportoviRouter.route('/sveDiscipline').get((req, res) => new sportovi_controller_1.SportoviController().sveDiscipline(req, res));
exports.default = sportoviRouter;
//# sourceMappingURL=sportovi.route.js.map