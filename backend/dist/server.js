"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const zemljeUcesnice_route_1 = __importDefault(require("./routes/zemljeUcesnice.route"));
const organizator_route_1 = __importDefault(require("./routes/organizator.route"));
const medalje_route_1 = __importDefault(require("./routes/medalje.route"));
const sportisti_route_1 = __importDefault(require("./routes/sportisti.route"));
const sportovi_route_1 = __importDefault(require("./routes/sportovi.route"));
const takmicenje_route_1 = __importDefault(require("./routes/takmicenje.route"));
const raspored_route_1 = __importDefault(require("./routes/raspored.route"));
const rezultati_route_1 = __importDefault(require("./routes/rezultati.route"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
app.use('/images', express_1.default.static(__dirname + '/../images'));
mongoose_1.default.connect('mongodb://localhost:27017/avgust2021');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('mongo ok');
});
const ruter = express_1.default.Router();
app.use('/', ruter);
ruter.use('/korisnici', user_route_1.default);
ruter.use('/zemlje', zemljeUcesnice_route_1.default);
ruter.use('/organizator', organizator_route_1.default);
ruter.use('/medalje', medalje_route_1.default);
ruter.use('/sportisti', sportisti_route_1.default);
ruter.use('/sportovi', sportovi_route_1.default);
ruter.use('/takmicenje', takmicenje_route_1.default);
ruter.use('/raspored', raspored_route_1.default);
ruter.use('/rezultati', rezultati_route_1.default);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map