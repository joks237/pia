import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let RezSkokBacanje = new Schema({
    idT: {
        type: Number
    },
    nazivRasporeda: {
        type: String
    },
    idS: {
        type: Number
    },
    prvi: {
        type: Number
    },
    drugi: {
        type: Number
    },
    treci: {
        type: Number
    }
})

export default mongoose.model('RezSkokBacanje', RezSkokBacanje, 'rez_skokovi_bacanja');