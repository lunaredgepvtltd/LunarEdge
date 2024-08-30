import vacancyModal from '../modals/vacancyModal.js'
export const addVacancyContoller = async(req,res)=>{
    console.log("inside vacancy")
    try{
     const { jobTitle, location, experience, rolePurpose } = req.body;

     const newVacancy = await vacancyModal.create({ jobTitle, location, experience, rolePurpose });

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