import mongoose, { model } from 'mongoose';

const Schema = mongoose.Schema;

let Sport = new Schema({
    sport: {
        type:String
    },
    disciplina:{
        type: Array<Object>()
     }
});

export default mongoose.model('Sport', Sport, 'sportovi');