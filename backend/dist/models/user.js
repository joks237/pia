"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
let User = new Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    nationality: {
        type: String
    },
    email: {
        type: String
    },
    type: {
        type: String
    }
});
exports.default = mongoose_1.default.model('User', User, 'korisnici');
//# sourceMappingURL=user.js.map