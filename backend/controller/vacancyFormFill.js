import VacancyApplyFormModal from "../modals/applyFormModal.js";


export const vacancyFormFill = async(req,res)=>{
    try {
        const formData = {
          firstName: req.body.firstName,
          lastName : req.body.lastName,
          email: req.body.email,
          jobId : req.body.jobId,
          phoneNumber: req.body.phoneNumber,
          cv: req.file ? req.file.path : null, // Store file path or URL
        };
    
        // Save form data to database
        const form = new VacancyApplyFormModal(formData);
        await form.save();
    
        res.status(200).json({
          data : form,
          message : "Form Filled Successfully!",
          success : true,
          error : false
        }
        );
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message : "Error Occured! Please Try Again.",
          error : true,
          success : false
        });
      }
}