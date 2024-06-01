"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RezStreljastvo = new Schema({
    idT: {
        type: Number
    },
    nazivRasporeda: {
        type: String
    },
    idS: {
        type: Number
    },
    s1: {
        type: Number
    },
    s2: {
        type: Number
    },
    s3: {
        type: Number
    },
    s4: {
        type: Number
    },
    s5: {
        type: Number
    },
    s6: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('RezStreljastvo', RezStreljastvo, 'rez_streljastvo');
//# sourceMappingURL=rezStreljastvo.js.map