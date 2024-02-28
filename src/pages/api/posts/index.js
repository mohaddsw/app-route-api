import fs from "fs"
import path from "path"
import db from "../../../../data/db"

export default function handler (req,res){
    const {userName,password,email}=req.body

switch(req.method){
   
    case "GET":{
        const dbPath=path.join(process.cwd(),"data","db.json")
        const data=fs.readFileSync(dbPath)
        const parseData=JSON.parse(data)
        
        res.status(200).json({data:parseData.posts})
        break
    }
    case "POST":{
        const dbPath=path.join(process.cwd(),"data","db.json")
        const data=fs.readFileSync(dbPath)
        const parseData=JSON.parse(data)
        parseData.posts.push({
            id:crypto.randomUUID(),
            userName,
            password,
            email
        })

        const err=fs.writeFileSync(dbPath,JSON.stringify(parseData))
        if(err){}else{
            res.status(201).json({message:"Post data successfully"})
            break
        }

       
        
    }
    case "PUT":{
        res.json({message:"PUT Data"})
        break
    }
}

}