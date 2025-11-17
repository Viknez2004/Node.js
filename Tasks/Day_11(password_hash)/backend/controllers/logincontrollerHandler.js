import bcrypt from 'bcrypt';
import regmodel from '../models/loginschema.js';

export const createreg=async(req,res)=>{

 
   try{
                  const {email,pass} = req.body;


         const saltround = 10;
         const hashed = await bcrypt.hash(pass,saltround);

         const temp = await regmodel.create({email , pass:hashed});

         res.status(201).json({msg:"successfully registered" , temp});
   }
   catch(e)
   {
        res.status(404).json({msg:e.message});
   }


};


export const login=async(req,res)=>{

      console.log(req.body);


        try{
              
           const {email,pass} = req.body;

           const temp=await regmodel.findOne({email});

           const match=await bcrypt.compare(  pass , temp.pass  );

           console.log(match);

           if(!match)
           {
               return res.status(404).json({ msg:"please provide valid password" });
           }

           const result={  email:email , pass:temp.pass  }

           if(match)
           {
               return res.status(200).json({  msg:result  });
           }
        

        }
        catch(e)
        {
            res.status(404).json({msg:e.message});
        }


};