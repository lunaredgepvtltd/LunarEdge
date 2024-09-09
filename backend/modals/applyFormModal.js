import mongoose from "mongoose";

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    cv: String, // Store CV file path or URL
  });
  
  const applyFormModal = mongoose.model('Form', formSchema);
  export default applyFormModal;