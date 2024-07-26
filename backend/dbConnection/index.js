import mongoose  from "mongoose";


const dbConnect = async()=>{
    try{
        const connection = await mongoose.connect('mongodb+srv://newofe8426:grPvlkJrHxRvpMQG@lunaredge.kfnjrlr.mongodb.net/LunarEdge_database');
    console.log("database connected successfully!")
    }
    catch(error){
        console.log('Error occured in connecting database' + error)
    }
}

export default dbConnect;