import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Takmicar = new Schema({
    idS: {
        type: Number
    },
    ime_i_prezime: {
        type: String
    }
})

export default mongoose.model('Takmicar', Takmicar, 'takmicari')