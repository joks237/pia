import mongoose from 'mongoose';


const Schema = mongoose.Schema;
let Raspored = new Schema({
    naziv: {
        type: String
    },
    idT : {
        type: Number
    },
    takmicari: {
        type: Array
    },
    sport: {
        type: String
    },
    disciplina: {
        type: String
    },
    pol: {
    type: String
    },
    datum: {
        type: String
    },
    vreme_pocetka: {
        type: String
    },
    lokacija: {
        type: String
    },
    formiran: {
        type: Number
    }
})








export default mongoose.model('Raspored', Raspored, 'raspored');