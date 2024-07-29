import Users from "../modals/userModal.js";

export const register = async (req, res, next) => {
console.log("Inside register")
  try {
    const { name, phoneNumber, email, subject, message } = req.body;

    if (!name) {
      throw new Error('Name is required!')
    }
    if (!email) {
      throw new Error('Email is required!')
    }
    if (!phoneNumber) {
      throw new Error('Password is required!')
    }


    console.log('started saving user')
    const newUser = await Users.create({
      name,
      phoneNumber,
      email,
      subject,
      message
    });


    res.status(200).json({
      message: "Registered Successfully!",
      success: true,
      error: false,
      data: newUser
    })
  }
  catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false
    })
  }
}