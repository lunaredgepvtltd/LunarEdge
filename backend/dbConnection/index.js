import mongoose  from "mongoose";


const dbConnect = async()=>{
    try{
        const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("database connected successfully!")
    }
    catch(error){
        console.log('Error occured in connecting database' + error)
    }
}

export default dbConnect;