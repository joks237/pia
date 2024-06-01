
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Disciplina = new Schema({
    sport: {
        type: String
    },
    naziv: {
        type: String
    },
   vrsta: {
       type:String
   },
   min_broj_igraca: {
       type:Number
   },
   max_broj_igraca: {
       type: Number
   }

});

export default mongoose.model('Disciplina', Disciplina, 'disciplina');