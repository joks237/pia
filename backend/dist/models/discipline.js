"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Disciplina = new Schema({
    sport: {
        type: String
    },
    naziv: {
        type: String
    },
    vrsta: {
        type: String
    },
    min_broj_igraca: {
        type: Number
    },
    max_broj_igraca: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Disciplina', Disciplina, 'disciplina');
//# sourceMappingURL=discipline.js.map