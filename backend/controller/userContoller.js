import Users from "../modals/userModal.js";

export const register = async(req,res,next)=>{
    console.log("inside register")
  const {name,phoneNumber,email,subject,message}= req.body;
  console.log({name,phoneNumber,email,subject,message})
  if(!name || !phoneNumber || !email){
    next('Provide Require fields');
    return;
  }

  try{
    console.log('started saving user')
    const newUser = await Users.create({
        name,
        phoneNumber,
        email,
        subject,
        message
    });

    console.log(newUser);
    res.send({message : "valid-user"})
  }
  catch(error){
    res.status(141).json({message : error.message})
  }
}