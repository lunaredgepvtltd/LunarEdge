import vacancyModal from '../modals/vacancyModal.js'
export const addVacancyContoller = async(req,res)=>{
    console.log("inside vacancy")
    try{
     const { jobTitle, location, experience, jobSummary , keyResponsibilities ,qualificationAndSkills,preferredQualifications,whatWeOffer } = req.body;

     const newVacancy = await vacancyModal.create({ jobTitle, jobSummary, location, experience,keyResponsibilities,qualificationAndSkills,preferredQualifications,whatWeOffer});


     res.json({
      data : newVacancy,
      success : true,
      message : "Vacancy Added Successfully!",
      error : false
     })

    }
    catch(error){
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
          })
    }
}

export const getAllVacancy = async(req,res)=>{
    try{
    const allVacancies = await vacancyModal.find({}).sort({ createdAt: -1});
    res.status(200).json({
        data : allVacancies,
        message : "vacancies sent",
        success : true,
        error : false
    })
    
    }
    
    catch(error){
        res.status(500).json({
            data : [],
            message: error.message || error,
            error: true,
            success: false
          })
    }
}


export const getParticularVacancy = async(req,res)=>{
    try{
    const {jobId} = req.body;
    const vacancy = await vacancyModal.findById(jobId)
    // console.log(allVacancies)
    res.status(200).json({
        data :  vacancy,
        message : "vacancy sent",
        success : true,
        error : false
    })
    
    }
    
    catch(error){
        res.status(500).json({
            data : [],
            message: error.message || error,
            error: true,
            success: false
          })
    }
}

export const deleteVacancy = async(req,res)=>{
    try{
    const {id} = req.body;
    const vacancy = await vacancyModal.findByIdAndDelete(id);
    if(vacancy){
        res.status(200).json({
            message : 'Vacancy Deleted Successfully!',
            success : true,
            error : false
        })
    }
    }
    catch(error){
        res.status(500).json({
            message: error.message || error,
            error: true,
            success: false
          })
    }
}

export const updateVacancy = async (req, res) => {
    try {
      // Extracting updated fields from the request body
      const { 
        id,
        jobTitle,
        location,
        experience,
        jobSummary, 
        keyResponsibilities,
        qualificationAndSkills,
        preferredQualifications,
        whatWeOffer 
      } = req.body;
  
      // Finding the vacancy by ID and updating it with new data
      const vacancy = await vacancyModal.findByIdAndUpdate(
        id,
        {
          jobTitle,
          location,
          experience,
          jobSummary,
          keyResponsibilities,
          qualificationAndSkills,
          preferredQualifications,
          whatWeOffer,
        },
        { new: true } // This option returns the updated document
      );
  
      // If the vacancy is found and updated, respond with success
      if (vacancy) {
        res.status(200).json({
          data: vacancy,
          message: "Vacancy updated successfully",
          success: true,
          error: false,
        });
      } else {
        // If no vacancy is found, respond with an error
        res.status(400).json({
          data: [],
          message: "Error while updating vacancy",
          success: false,
          error: true,
        });
      }
    } catch (error) {
      // Handle server errors
      res.status(500).json({
        data: [],
        message: error.message || error,
        error: true,
        success: false,
      });
    }
  };
  