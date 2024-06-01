"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const medalje_1 = __importDefault(require("../models/medalje"));
class MedaljeController {
    constructor() {
        this.sveMedalje = (req, res) => {
            medalje_1.default.find((err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
        this.dodajMedalju = (req, res) => {
            let zemlja = req.body.zemlja;
            let mesto = req.body.mesto;
            if (mesto == 1) {
                medalje_1.default.updateOne({ 'naziv': zemlja }, { $inc: { 'brojZlatnih': 1, 'ukupanBroj': 1 } }, (err) => {
                    if (err)
                        console.log(err);
                    else
                        res.json({ 'message': 'ok' });
                });
            }
            else if (mesto == 2) {
                medalje_1.default.updateOne({ 'naziv': zemlja }, { $inc: { 'brojSrebrnih': 1, 'ukupanBroj': 1 } }, (err) => {
                    if (err)
                        console.log(err);
                    else
                        res.json({ 'message': 'ok' });
                });
            }
            else {
                medalje_1.default.updateOne({ 'naziv': zemlja }, { $inc: { 'brojBronzanih': 1, 'ukupanBroj': 1 } }, (err) => {
                    if (err)
                        console.log(err);
                    else
                        res.json({ 'message': 'ok' });
                });
            }
        };
    }
}
exports.MedaljeController = MedaljeController;
//# sourceMappingURL=medalje.controller.js.map