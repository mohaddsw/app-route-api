
import fs from "fs"
import path from "path"

const handler=(req,res)=>{
    const {id}=req.query
    switch(req.method){
        case "DELETE":{
            const dbPath=path.join(process.cwd(),"data","db.json")
        const data=fs.readFileSync(dbPath)
        const parseData=JSON.parse(data)
        const newUsers=parseData.posts.filter(post=>post.id!==+id)

        const err=fs.writeFileSync(dbPath,JSON.stringify({...parseData,posts:newUsers}))
           if(err){}else{
            res.status(200).json({message:"delete user is successfuly"})
           }
        }
        case "PUT":{
            
        }
    }
}
export default handler