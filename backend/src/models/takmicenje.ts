import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Takmicenje = new Schema({
    idT: {
        type: Number
    },
    sport:{
        type: String
    },
    disciplina:{
        type:String
    },
    vrsta: {
        type: String
    },
    pol: {
        type: String
    },
   
    takmicari: {
        type: Array
    },
    datum_pocetka: {
        type: String
    },
    datum_kraja: {
        type: String
    },
    lokacija:{
        type: String
    },
    delegat: {
        type: String
    },
    formiranRaspored: {
        type: String
    }
});

export default mongoose.model('Takmicenje', Takmicenje, 'takmicenje');
