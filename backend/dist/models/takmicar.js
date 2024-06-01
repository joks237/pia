"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Takmicar = new Schema({
    idS: {
        type: Number
    },
    ime_i_prezime: {
        type: String
    }
});
exports.default = mongoose_1.default.model('Takmicar', Takmicar, 'takmicari');
//# sourceMappingURL=takmicar.js.map