"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let RezSkokBacanje = new Schema({
    idT: {
        type: Number
    },
    nazivRasporeda: {
        type: String
    },
    idS: {
        type: Number
    },
    prvi: {
        type: Number
    },
    drugi: {
        type: Number
    },
    treci: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('RezSkokBacanje', RezSkokBacanje, 'rez_skokovi_bacanja');
//# sourceMappingURL=rezSkokBacanje.js.map