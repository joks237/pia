"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Sportista = new Schema({
    idS: {
        type: Number
    },
    ime_i_prezime: {
        type: String
    },
    zemlja: {
        type: String
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
    osvojio: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Sportista', Sportista, 'sportisti');
//# sourceMappingURL=sportisti.js.map