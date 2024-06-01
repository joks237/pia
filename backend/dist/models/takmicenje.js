"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Takmicenje = new Schema({
    idT: {
        type: Number
    },
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    vrsta: {
        type: String
    },
    pol: {
        type: String
    },
    takmicari: {
        type: Array
    },
    datum_pocetka: {
        type: String
    },
    datum_kraja: {
        type: String
    },
    lokacija: {
        type: String
    },
    delegat: {
        type: String
    },
    formiranRaspored: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Takmicenje', Takmicenje, 'takmicenje');
//# sourceMappingURL=takmicenje.js.map