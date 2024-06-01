import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/user.route';
import zemljeRouter from './routes/zemljeUcesnice.route';
import organizatorRuter from './routes/organizator.route';
import medaljeRouter from './routes/medalje.route';
import sportistiRuter from './routes/sportisti.route';
import sportoviRouter from './routes/sportovi.route';
import takmicenjeRouter from './routes/takmicenje.route';
import rasporedRouter from './routes/raspored.route';
import rezultatiRouter from './routes/rezultati.route';

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/images', express.static(__dirname + '/../images'));

mongoose.connect('mongodb://localhost:27017/avgust2021');
const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('mongo ok')
});
const ruter = express.Router();

app.use('/',ruter);
ruter.use('/korisnici',userRouter);
ruter.use('/zemlje', zemljeRouter);
ruter.use('/organizator' , organizatorRuter);
ruter.use('/medalje', medaljeRouter);
ruter.use('/sportisti', sportistiRuter);
ruter.use('/sportovi', sportoviRouter);
ruter.use('/takmicenje', takmicenjeRouter);
ruter.use('/raspored', rasporedRouter);
ruter.use('/rezultati' , rezultatiRouter)

app.listen(4000, () => console.log(`Express server running on port 4000`));