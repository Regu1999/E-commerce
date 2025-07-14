import { Schema, model } from "mongoose"

const userSchema = new Schema({
    UserName: {
        require: true,
        type: String
    },
    email: {
        require: true,
        type: String
    },
    password:{
        require:true,
        type:String
    }
})

const Users = model('User', userSchema);

export default Users