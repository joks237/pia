"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Raspored = new Schema({
    naziv: {
        type: String
    },
    idT: {
        type: Number
    },
    takmicari: {
        type: Array
    },
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    pol: {
        type: String
    },
    datum: {
        type: String
    },
    vreme_pocetka: {
        type: String
    },
    lokacija: {
        type: String
    },
    formiran: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Raspored', Raspored, 'raspored');
//# sourceMappingURL=raspored.js.map