import mongoose from "mongoose";
const Schema = mongoose.Schema;


const mailSchema = new Schema({
    email : {
        type : String,
        required : [true,'email is required']
    }
},{
    timestamps : true
})

const mailModal = mongoose.model("Mail",mailSchema)
export default mailModal;