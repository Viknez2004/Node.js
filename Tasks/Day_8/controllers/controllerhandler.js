import xmodel from "../models/schemahandler.js";

export const createUser=(req,res)=>{

       console.log(req.body);

       const {  email , pass  } = req.body;

       try {
        
               if( email.includes("@") &&  pass.length>5 )
               {
                    const y=xmodel.create({email,pass});

                     res.status(201).json(  {  info:"created user successfully" , datas:req.body  }  );
               }
               else
               {
                   res.status(404).json(  {  info:"please provide valid details"  }  );
               }

       } catch (error) {
          console.log("OOOps" , error.message);
       }

};


export const getUsers=async(req,res)=>{

         try {
        
                    const i =await xmodel.find();

                     res.status(200).json({info:"gotted" , datas:i});

             }
         catch (error)
          {
            
             console.log("error",error.message);
          }

};


