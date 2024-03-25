import connectToDB from "../../../../utils/db";
import userModel from "../../../../models/user";
import { isValidObjectId } from "mongoose";

const handler = async (req, res) => {
  connectToDB();
  const { id } = req.query;
  const {username,password,email}=req.body

  switch (req.method) {
    case "GET": {
      // const user=await userModel.findOne({_id:id})
      const user = await userModel.find({ _id: id });
      return  res.status(200).json({ data: user });
    }
    case "DELETE": {
        if(isValidObjectId(id)){
            const deletedUser=await userModel.findOneAndDelete({_id:id})
            if(deletedUser){
                return res.status(200).json({message:"the use was deleted"})
            }else{
                return res.status(401).json({message:"the use not found"})
            }
        }else{
            return res.status(422).json({message:"ID is not valid"})
        }
       
    }
    case "PUT":{
        const updatedUser=await userModel.findOneAndUpdate({_id:id},{
            username,
            password,
            email
        })
        if(updatedUser){
            return res.status(200).json({message:"the use was updared"})
        }else{
            return res.status(401).json({message:"the use not found"})
        }
    }
  }
};
export default handler;
