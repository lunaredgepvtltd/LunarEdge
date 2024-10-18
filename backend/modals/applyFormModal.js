import mongoose from "mongoose";

const vacancyApplyFormSchema = new mongoose.Schema({
    firstName: String,
    lastName : String,
    email: String,
    phoneNumber: String,
    cv: String,
    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Vacancy',
    }
  });
  
  const VacancyApplyFormModal = mongoose.model('vacancyApplyForm', vacancyApplyFormSchema);
  export default VacancyApplyFormModal;