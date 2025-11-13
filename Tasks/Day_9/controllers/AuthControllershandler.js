import regmodel, { favperregmodel } from "../models/handleschema.js";

export const createregister=(req,res)=>{

      console.log(req.body);

           const {  email , password  } = req.body;

        
                
           
                  const temp =regmodel.create({email,password});

                  res.status(201).json(  {  info:"succesfully created" , datas:email  }  );

      


};


export const showregdatas=async(req,res)=>{

            
 
                  const temp = await regmodel.find();

                  res.status(200).json({info:"successfully fetched registered users" , regdatas:temp});


};

export const favperregcreate=(req, res)=>{

           console.log(req.body);

           const {  name , role , city , networth  } = req.body;

           const temp = favperregmodel.create(  {  name , role , city , networth  }  );

           res.status(200).json(  {datas:req.body}  );

};

export const showfavperdatas=async(req,res)=>{

             const temp=await favperregmodel.find();

             res.status(200).json({favperdatas:temp});

};