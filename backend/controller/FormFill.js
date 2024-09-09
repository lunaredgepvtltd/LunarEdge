import applyFormModal from "../modals/applyFormModal.js";


export const FormFill = async(req,res)=>{
    try {
        const formData = {
          name: req.body.name,
          email: req.body.email,
          phoneNumber: req.body.phoneNumber,
          cv: req.file ? req.file.path : null, // Store file path or URL
        };
    
        // Save form data to database
        const form = new applyFormModal(formData);
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