"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RezVeceTrke = new Schema({
    idT: {
        type: Number
    },
    nazivRasporeda: {
        type: String
    },
    idS: {
        type: Number
    },
    rezultat: {
        type: String
    }
});
exports.default = mongoose_1.default.model('RezVeceTrke', RezVeceTrke, 'rez_vece_trke');
//# sourceMappingURL=rezVeceTrke.js.map