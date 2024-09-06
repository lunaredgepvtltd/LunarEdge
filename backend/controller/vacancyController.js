import vacancyModal from '../modals/vacancyModal.js'
export const addVacancyContoller = async(req,res)=>{
    console.log("inside vacancy")
    try{
     const { jobTitle, location, experience, rolePurpose,description,requirements } = req.body;

     const newVacancy = await vacancyModal.create({ jobTitle, location, experience, rolePurpose,description ,requirements});

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
    console.log(allVacancies)
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

export const updateVacancy = async(req,res)=>{
    try{
        const { id,jobTitle, location, experience, rolePurpose,description,requirements } = req.body;
        const vacancy = await vacancyModal.findByIdAndUpdate(id,{jobTitle,location,experience,rolePurpose,description,requirements});
        if(vacancy){
            res.status(200).json({
                data : vacancy,
                message : "updated successfully",
                success : true,
                error : false
            })
        }
        else{
            res.status(400).json({
                data : [],
                message : "error while updating",
                success : false,
                error : true
            })
        }
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