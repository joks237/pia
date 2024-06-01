import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RezVelikeTrke = new Schema({
    idT: {
        type: Number
    },
    nazivRasporeda: {
        type: String
    },
    idS: {
        type: Number
    },
    rezultat: {
        type: String
    }
})

export default mongoose.model('RezVelikeTrke', RezVelikeTrke, 'rez_velike_trke');