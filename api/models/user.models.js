import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName:{
        type: 'string',
        required: true,
        // unique:true,
    }
})

const User = mongoose.model('User',UserSchema);

export default User;