import ticketmodel from "../models/schemaHandler.js";

export const createticket=async(req,res)=>{


              const{ name , fromjn , tojn , date  }=req.body;

              const temp = await ticketmodel.create({ name , fromjn , tojn , date  });

              res.status(201).json({msg:"Ticket Booked Successfully"});



};


export const getticket=async(req,res)=>{

             
              const temp = await ticketmodel.find();

              res.status(200).json({temp});


};

export const editticket=async(req,res)=>{

             const {id} = req.params;

             const temp = await ticketmodel.findById(id);

             res.status(200).json( {temp}  );

};

export const updateticket=async(req,res)=>{

             const {id}=req.params;

             const {  name , fromjn , tojn , date  } = req.body;

             const temp = await ticketmodel.findByIdAndUpdate(  id , req.body , {new:true}  );

             res.status(200).json( { msg:"Successfully updated" ,  temp} );

};