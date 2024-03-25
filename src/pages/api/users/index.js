import connectToDB from "../../../../utils/db";
import userModel from "../../../../models/user"

const handler=async(req, res)=> {
    connectToDB()

  const { username, password, email } = req.body;

  switch (req.method) {
    case "GET":{
        const users=await userModel.find({})
        res.status(200).json({data:users})
        break
    }
    case "POST": {

     const user=await userModel.create({
        username,
        password,
        email
    })
    console.log(user)

    if(user){
        res.status(201).json({ message: "Post User successfully" });
        break;
    }else{
        res.status(422).json({ message: "Post User Error" });
        break;
    }
    
    }
  }
}
export default handler