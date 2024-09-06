 import adminModal from '../modals/adminModal.js'
 import bcrypt from 'bcrypt';


 const AdminLoginController = async(req,res)=>{
    console.log('inside adminLogin')
    try{
    const {email , password} = req.body;

    if(!email) res.status(500).json({message : 'email is required',error : true, success : false})
        
    if(!password) res.status(500).json({message : 'password is required',error : true, success : false})

   
    // code for creating new-user 

    // const salt = await bcrypt.genSalt(10);
    // const hashPass =  await bcrypt.hash(password, salt);
    // await adminModal.create({email , password : hashPass});

    const existedUser = await adminModal.findOne({email});

    if(existedUser){
        const isMatch = await bcrypt.compare(password,existedUser.password);
        if(!isMatch){
            res.status(200).json({
                message : "Incorrect Password",
                error : true,
                success : false,
            })
        }
        else{
            
        existedUser.role = 'ADMIN';

        res.status(200).json({
            data : existedUser,
            message : "LoggedIn Successfully!",
            error : false,
            success : true
        })
        }

    }
    else{
        res.json({
            message : 'Invalid User',
            error : true,
            success : false
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

export default AdminLoginController