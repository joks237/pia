import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    username: {
        type: String
    },
    password:{
        type: String
    },
    confirmPassword:{
        type:String
    },
    name: {
        type: String
    },
    lastname: {
        type: String
    },
    nationality: {
        type: String
    },
    email: {
        type: String
    },
    type: {
        type: String
    }

});

export default mongoose.model('User', User, 'korisnici');
