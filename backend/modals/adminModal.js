import mongoose from "mongoose";
const Schema = mongoose.Schema;


const adminSchema = new Schema({
    email : {
        type : String,
        required : [true,'email is required'],
        unique : true
    },
    password : {
        type : String,
        required : [true,'password is required']
    },
    role : {
        type : String,
        default : 'GENERAL'
    }
},{
    timestamps : true
})

const adminModal = mongoose.model("admin",adminSchema)
export default adminModal;