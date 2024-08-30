import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema({

  jobTitle: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  experience: {
    type: String,
    required: true,
    trim: true,
  },
  rolePurpose: {
    type: String,
    required: true,
    trim: true,
  },
  
},{
  timestamps : true
});

const vacancyModal = mongoose.model('Vacancy', vacancySchema);
export default vacancyModal;
