"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Zemlja = new Schema({
    slika: {
        type: String
    },
    naziv: {
        type: String
    },
    broj: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Zemlja', Zemlja, 'zemljeUcesnice');
//# sourceMappingURL=zemljeUcesnice.js.map