export const authcontroller = ( req,res )=>{

      console.log(req.body);

      const {name,age} = req.body;

      res.status(200).json(  {name:name,age:age,message:"received"}  );




};