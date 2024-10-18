import mongoose from "mongoose";
const Schema = mongoose.Schema;


const queryFormSchema = new Schema({
    firstName : {
        type : String,
        required : [true,'firstName is required!']
    },
    lastName : {
        type : String,
        required : [true,'lastName is required!']
    },
    phoneNumber : {
        type : Number,
        required : [true,'phone number is required']
    },
    email : {
        type : String,
        required : [true,'email is required']
    },
    message : {
        type : String,
        required : [true,'Please leave a message']
    }
})

const queryFormModal = mongoose.model("queryForm",queryFormSchema)
export default queryFormModal;