"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("../models/user"));
const zahtevi_1 = __importDefault(require("../models/zahtevi"));
class UserController {
    constructor() {
        this.login = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            user_1.default.findOne({ 'username': username, 'password': password }, (err, user) => {
                if (err)
                    console.log(err);
                else
                    res.json(user);
            });
        };
        this.register = (req, res) => {
            let username = req.body.username;
            let password = req.body.password;
            let confirmPassword = req.body.confirmPassword;
            let name = req.body.name;
            let lastname = req.body.lastname;
            let nationality = req.body.nationality;
            let email = req.body.email;
            let type = req.body.type;
            let validator = RegExp(/^(?!.*(.)\1\1)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/);
            user_1.default.findOne({ 'username': username }, (err, user) => {
                if (err) {
                    console.log(err);
                    return;
                }
                if (user == null) {
                    if (username == null || password == null || confirmPassword == null || name == null || lastname == null || nationality == null || email == null || type == null) {
                        res.json({ 'message': 'niste uneli sve podatke' });
                    }
                    else {
                        if (password != confirmPassword) {
                            res.json({ 'message': 'Ne poklapaju se lozinke' });
                        }
                        else if (type == 'vodjanacionalnedelegacije') {
                            user_1.default.findOne({ 'nationality': nationality, 'type': 'vodjanacionalnedelegacije' }, (err, user) => {
                                if (err)
                                    console.log(err);
                                else if (user) {
                                    res.json({ 'message': 'Vec postoji vodja nacionalne delegacije za odabranu zemlju' });
                                }
                                else {
                                    let newUser = new zahtevi_1.default({ 'username': username, 'password': password, 'confirmPassword': confirmPassword, 'name': name, 'lastname': lastname, 'nationality': nationality, 'email': email,
                                        'type': type });
                                    newUser.save().then(() => {
                                        res.json({ 'message': 'user added' });
                                    }).catch((err) => {
                                        res.json({ 'message': err });
                                    });
                                }
                            });
                        }
                        else {
                            let newUser = new zahtevi_1.default({ 'username': username, 'password': password, 'confirmPassword': confirmPassword, 'name': name, 'lastname': lastname, 'nationality': nationality, 'email': email,
                                'type': type });
                            newUser.save().then(() => {
                                res.json({ 'message': 'user added' });
                            }).catch((err) => {
                                res.json({ 'message': err });
                            });
                        }
                    }
                }
                if (user != null) {
                    res.json({ 'message': 'username exists' });
                }
            });
        };
        this.sviDelegati = (req, res) => {
            user_1.default.find({ 'type': 'delegat' }, (err, data) => {
                if (err)
                    console.log(err);
                else
                    res.json(data);
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map