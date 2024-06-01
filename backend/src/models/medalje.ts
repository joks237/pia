import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Medalja = new Schema({
    rang: {
        type: Number
    },
   naziv: {
       type:String
   },
   brojZlatnih: {
       type:Number
   },
   brojSrebrnih: {
       type: Number
   },
   brojBronzanih: {
       type: Number
   },
   ukupanBroj: {
       type: Number
   }

});

export default mongoose.model('Medalja', Medalja, 'medalje');