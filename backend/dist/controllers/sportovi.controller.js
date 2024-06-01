"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discipline_1 = __importDefault(require("../models/discipline"));
const sportovi_1 = __importDefault(require("../models/sportovi"));
class SportoviController {
    constructor() {
        this.sviSportovi = (req, res) => {
            sportovi_1.default.find((err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.sveDiscipline = (req, res) => {
            discipline_1.default.find((err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
    }
}
exports.SportoviController = SportoviController;
//# sourceMappingURL=sportovi.controller.js.map