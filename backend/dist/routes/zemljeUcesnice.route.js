"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zemlje_controller_1 = require("../controllers/zemlje.controller");
const zemljeRouter = express_1.default.Router();
zemljeRouter.route('/ucesnice').get((req, res) => new zemlje_controller_1.ZemljeController().ucesnice(req, res));
exports.default = zemljeRouter;
//# sourceMappingURL=zemljeUcesnice.route.js.map