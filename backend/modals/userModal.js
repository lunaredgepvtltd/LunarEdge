import mongoose from "mongoose";
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name : {
        type : String,
        required : [true,'name is required!']
    },
    phoneNumber : {
        type : Number,
        required : [true,'phone number is required']
    },
    email : {
        type : String,
        required : [true,'email is required']
    },
    subject : {
        type : String,
    },
    message : {
        type : String
    }
})

const Users = mongoose.model("Users",userSchema)
export default Users;