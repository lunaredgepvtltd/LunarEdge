import VacancyApplyFormModal from "../modals/applyFormModal.js";

export const applicantsDetails = async (req, res) => {
  const { id } = req.body; 
  
  try {
    // Find all applicants with the  jobId
    const applicants = await VacancyApplyFormModal.find({ jobId: id });

    // If no applicants are found
    if (!applicants || applicants.length === 0) {
        return res.status(404).json({
        message: "No applicants found for this job!",
        error: false,
        success: true,
        data: []
      });
    }

    // If applicants are found, return them
    return res.status(200).json({
      message: "Applicants fetched successfully!",
      error: false,
      success: true,
      data: applicants
    });
  } catch (error) {
    // Handle any errors
    return res.status(500).json({
      message: "Error Occurred In Showing Applicants! Please Try Again.",
      error: true,
      success: false,
    });
  }
};
