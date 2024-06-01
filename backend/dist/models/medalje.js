"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let Medalja = new Schema({
    rang: {
        type: Number
    },
    naziv: {
        type: String
    },
    brojZlatnih: {
        type: Number
    },
    brojSrebrnih: {
        type: Number
    },
    brojBronzanih: {
        type: Number
    },
    ukupanBroj: {
        type: Number
    }
});
exports.default = mongoose_1.default.model('Medalja', Medalja, 'medalje');
//# sourceMappingURL=medalje.js.map