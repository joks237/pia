import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RezTenis = new Schema({
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

export default mongoose.model('RezTenis', RezTenis, 'rezTenis');