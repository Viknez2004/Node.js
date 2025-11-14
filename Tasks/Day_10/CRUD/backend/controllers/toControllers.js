import inpModel from "../models/handleSchemas.js";

export const createUser=async(req,res)=>{



         const {  name , age  } = req.body;

         if( name!="" && age!="" )
         {
               const temp=await inpModel.create({  name , age  });

               res.status(201).json(  {msg:"user created successfully" , info:req.body}  );
         }

         else
         {
             res.status(404).json({msg:"please provide valid details"});
         }



};


export const getUsers = async(req,res)=>{

         const temp = await inpModel.find();

         res.status(200).json(  {  temp  }  );


};


export const paramsId=async(req,res)=>{

         const {id}=req.params;

         const tempid = await inpModel.findById(id);

         res.status(200).json({tempid});

};


export const updateUser=async(req,res)=>{

       
         const tempupd = await inpModel.findByIdAndUpdate( req.params.id , req.body , {new:true} );

         res.status(201).json(  { msg: "successfully updated"  , tempupd }  );


};


export const delUser=async(req,res)=>{

         const del = await inpModel.findByIdAndDelete( req.params.id );

         res.status(200).json(  { msg: `successfully deleted ${req.params.id}` }  );



};

