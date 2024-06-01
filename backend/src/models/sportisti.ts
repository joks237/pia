import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Sportista = new Schema({
    idS: {
        type: Number
    },
    ime_i_prezime: {
        type: String
    },
   zemlja: {
       type:String
   },
   sport: {
       type:String
   },
   disciplina: {
       type: String
   },
   pol: {
       type: String
   },
   osvojio: {
       type: Number
   }

});

export default mongoose.model('Sportista', Sportista, 'sportisti');