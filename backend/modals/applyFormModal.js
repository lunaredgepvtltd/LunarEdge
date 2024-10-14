import mongoose from "mongoose";

const vacancyApplyFormSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    cv: String, // Store CV file path or URL
  });
  
  const applyFormModal = mongoose.model('vacancyApplyForm', vacancyApplyFormSchema);
  export default applyFormModal;