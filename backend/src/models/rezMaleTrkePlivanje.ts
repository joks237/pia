import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RezMaleTrkePlivanje = new Schema({
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
        type: Number
    }
})

export default mongoose.model('RezMaleTrkePlivanje', RezMaleTrkePlivanje, 'rez_male_trke_plivanje');