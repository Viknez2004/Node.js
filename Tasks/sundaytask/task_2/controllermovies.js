const movies = [
    { name: "Leo", year: 2023, actor: "Vijay", director: "Lokesh Kanagaraj" },
    { name: "Vikram", year: 2022, actor: "Kamal Haasan", director: "Lokesh Kanagaraj" },
    { name: "Master", year: 2021, actor: "Vijay", director: "Lokesh Kanagaraj" },
    { name: "Kaithi", year: 2019, actor: "Karthi", director: "Lokesh Kanagaraj" },
    { name: "Jailer", year: 2023, actor: "Rajinikanth", director: "Nelson Dilipkumar" },
    { name: "Beast", year: 2022, actor: "Vijay", director: "Nelson Dilipkumar" },
    { name: "Don", year: 2022, actor: "Sivakarthikeyan", director: "Cibi Chakravarthi" },
    { name: "Love Today", year: 2022, actor: "Pradeep Ranganathan", director: "Pradeep Ranganathan" },
    { name: "Thunivu", year: 2023, actor: "Ajith Kumar", director: "H. Vinoth" },
    { name: "Vada Chennai", year: 2018, actor: "Dhanush", director: "Vetrimaaran" }
  ];

export const movieslist=(req,res)=>{

    if(req)
    {
            res.status(200).json({movielist:movies})
    }

};

export const moviebyid=(req,res)=>{

        
       
        const {movieid}=req.params;

        console.log(movieid);

        if(movieid==1)
        {
            res.status(200).json({your_movie:movies[1]})
        }

        
        else if(movieid==2)
        {
            res.status(200).json({your_movie:movies[2]})
        }

        
        else if(movieid==3)
        {
            res.status(200).json({your_movie:movies[3]})
        }

        
        else if(movieid==4)
        {
            res.status(200).json({your_movie:movies[4]})
        }

        
        else if(movieid==5)
        {
            res.status(200).json({your_movie:movies[5]})
        }

        
        else if(movieid==6)
        {
            res.status(200).json({your_movie:movies[6]})
        }

        
        else if(movieid==7)
        {
            res.status(200).json({your_movie:movies[7]})
        }

        
      else if(movieid==8)
        {
            res.status(200).json({your_movie:movies[8]})
        }

        
        else if(movieid==9)
        {
            res.status(200).json({your_movie:movies[9]})
        }

        else{
                res.status(404).json({warning:"we will shortly update, thank you!"})
        }

};


export const movielistupdate=(req,res)=>{

            console.log(req.body);

            const {name,year,actor,director} = req.body;


            if(name && year && actor && director)
            {
                const temp={name:name,year:year, actor:actor, director:director};

                movies.push(temp);

                res.status(200).json( { updatedsuccessfullyyourmovie:temp } );

                console.log(movies);
            }
         
            else
            {
                res.status(404).json({ info:"please provide valid informations" });
            }

            
};


export const delmovie=(req,res)=>{

       const {id}=req.params;

       if(id)
       {
           movies.splice(id,1);

           console.log(movies);

           res.status(200).json({info:`your movie deleted on id${id}`});
       }

};



export const editmovie=(req,res)=>{

       const {name,year,actor,director}=req.body;

       

};
