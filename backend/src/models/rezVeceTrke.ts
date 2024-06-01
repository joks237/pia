import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RezVeceTrke = new Schema({
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

export default mongoose.model('RezVeceTrke', RezVeceTrke, 'rez_vece_trke');