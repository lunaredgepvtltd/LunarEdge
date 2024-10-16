import mongoose from "mongoose";

const vacancySchema = new mongoose.Schema({

  jobTitle: {
    type: String,
    trim: true,
  },
  location: {
    type: String,
    trim: true,
  },
  experience: {
    type: String,
    trim: true,
  },
  description : {
    type : String,
    trim : true,
  },
  keyResoponsibilites : {
    type : String,
    trim : true
  },
  qualificationAndSkills:{
    type : String,
    trim : true,
  },
  preferredQualifications : {
    type : String,
    trim : true,
  },
  whatWeOffer : {
    type : String,
    trim : true
  }
  
},{
  timestamps : true
});

const vacancyModal = mongoose.model('Vacancy', vacancySchema);
export default vacancyModal;
