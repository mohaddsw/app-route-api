const mongoose = require("mongoose");

const connectToDB=async()=>{
    try{
        if(mongoose.connections[0].readyState){
            return false
        }else{
            await mongoose.connect("mongodb://127.0.0.1:27017/test")
            console.log("Connected")
        }
    }
    catch(err){
        console.log("ERRORR=>",err)
    }
}

export default connectToDB