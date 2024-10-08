"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zemljeUcesnice_1 = __importDefault(require("../models/zemljeUcesnice"));
class ZemljeController {
    constructor() {
        this.ucesnice = (req, res) => {
            zemljeUcesnice_1.default.find({}, (err, zemlja) => {
                if (err)
                    console.log(err);
                else
                    res.json(zemlja);
            });
        };
    }
}
exports.ZemljeController = ZemljeController;
//# sourceMappingURL=zemlje.controller.js.map