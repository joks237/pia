import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RezStreljastvo = new Schema({
    idT: {
        type: Number
    },
    nazivRasporeda: {
        type: String
    },
    idS: {
        type: Number
    },
    s1: {
        type: Number
    },
    s2: {
        type: Number
    },
    s3: {
        type: Number
    },
    s4: {
        type: Number
    },
    s5: {
        type: Number
    },
    s6: {
        type: Number
    }
})

export default mongoose.model('RezStreljastvo', RezStreljastvo, 'rez_streljastvo');