const mongoose = require('mongoose');

const scheama=mongoose.Schema({
    username:{
        type:String,
        required:true,
        //minLength,maxLength
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    }
})
const model=mongoose.models.Users||mongoose.model("Users",scheama)
export default model