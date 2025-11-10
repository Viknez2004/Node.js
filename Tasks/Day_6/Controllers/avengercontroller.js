export const bodycontrol=(req,res)=>{

    console.log(req.body);

    const {name} = req.body;

    const thor = {
  name: "Thor Odinson",
  place: "Asgard",
  superPower: "God of Thunder — can summon lightning and wield Mjolnir",
  experience: "Over 1500 years of battle experience defending realms"
};

    if(name=="thor")
    {
        res.status(200).json(  {  message:thor }  )
    }
    else
    {
        res.status(404).json(  {message:"Right we are working for that"}  )
    }


};



export const paramscontroller=(req,res)=>{
  
     console.log(req.params);

     const {id} = req.params;

     if(id==1)
     {
         res.status(200).json( { message:"Space Stone" } )
     }
     else if(id==2)
     {
        res.status(200).json( {  message: "Mind Stone"  } )
     }
     else if(id==3)
     {
        res.status(200).json( { message:"Reality Stone" } )
     }
     else if(id==4)
     {
        res.status(200).json( { message:"Power Stone" } )
     }
     else if(id==5)
     {
        res.status(200).json( { message:"Time Stone" } )
     }
     else if(id==6)
     {
        res.status(200).json( { message:"Soul Stone" } )
     }
     else{
            res.status(404).json( { message:"sorry there is no stone present" } )
     }

};


export const querycontroller=(req,res)=>{

       console.log( req.query );

       const avengersLocations = [
  {
    name: "Iron Man",
    realName: "Tony Stark",
    location: "New York (Stark Tower / Avengers Tower)",
    planet: "Earth"
  },
  {
    name: "Captain America",
    realName: "Steve Rogers",
    location: "Brooklyn, New York",
    planet: "Earth"
  },
  {
    name: "Thor",
    realName: "Thor Odinson",
    location: "Asgard (later New Asgard in Norway)",
    planet: "Asgard / Earth"
  },
  {
    name: "Hulk",
    realName: "Bruce Banner",
    location: "Avengers Facility, later Sakaar (temporary)",
    planet: "Earth"
  },
  {
    name: "Black Widow",
    realName: "Natasha Romanoff",
    location: "Avengers Facility, Upstate New York",
    planet: "Earth"
  },
  {
    name: "Hawkeye",
    realName: "Clint Barton",
    location: "Missouri (Family Farm)",
    planet: "Earth"
  },
  {
    name: "Doctor Strange",
    realName: "Stephen Strange",
    location: "New York (Sanctum Sanctorum)",
    planet: "Earth"
  },
  {
    name: "Spider-Man",
    realName: "Peter Parker",
    location: "Queens, New York",
    planet: "Earth"
  },
  {
    name: "Black Panther",
    realName: "T'Challa",
    location: "Wakanda",
    planet: "Earth"
  },
  {
    name: "Captain Marvel",
    realName: "Carol Danvers",
    location: "Space (various planets)",
    planet: "Multiple / Earth"
  }
];


    const { num } = req.query; 

    if( num==1 )
    {
         res.status(200).json({character:avengersLocations[1]})
    }
    else if(num==2)
    {
        res.status(200).json( { character:avengersLocations[2] } )
    }
    else if( num==3 )
    {
        res.status(200).json( { character:avengersLocations[3] } )
    }
    else if( num==4 )
    {
        res.status(200).json( { character:avengersLocations[4] } )
    }
    else if( num==5 )
    {
        res.status(200).json( { character:avengersLocations[5] } )
    }
    else if( num==6 )
    {
        res.status(200).json( { character:avengersLocations[6] } )
    }
    else{
        res.status(404).json( { message:"sorry, we are working for that" } )
    }


};



export const headercontroller=(req,res)=>{

         console.log( req.headers );


};




