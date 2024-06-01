import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Zemlja = new Schema({
   slika: {
       type:String
   },
   naziv: {
       type:String
   },
   broj: {
       type: Number
   }

});

export default mongoose.model('Zemlja', Zemlja, 'zemljeUcesnice');