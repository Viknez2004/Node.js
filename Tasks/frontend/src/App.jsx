import { useEffect, useState } from "react";
import axios from 'axios';

const App=()=>{

      const [reg,setReg] = useState({email:"",password:""});

      const [showreg,setshowreg] = useState([]);

      const handlechange=(e)=>{

             setReg(  {  ...reg , [e.target.name]:e.target.value  }  );

      };

      const handleregister=async(e)=>{

                   e.preventDefault();

              const resultregcreate = await axios.post(  "http://localhost:3000/api/basetoroute/createregister" , reg  );

                     const resulttemp= await resultregcreate;    

                 alert(resulttemp.data.info);
      };

      const [ showfavperreg , setShowfavperreg ] = useState([]);

      const fetchreg = async()=>{   
        
        const resultregget= await axios.get( "http://localhost:3000/api/basetoroute/showreg" );

              setshowreg(  resultregget.data.regdatas );

            
      
      }

      const fetchfavper=async()=>{

           const resultfavper = await axios.get("http://localhost:3000/api/basetoroute/getfavper");

              setShowfavperreg(resultfavper.data.favperdatas);


      };

      useEffect(  ()=>{ 
        
                        fetchreg();

                        fetchfavper();
      
      }  , []  );

      

      const [  favperson , setFavperson  ] = useState({name:"" , role:"" , city:"" , networth:""});

      const handlefavpersonchange=(e)=>{

                      setFavperson(  { ...favperson , [e.target.name]:e.target.value  }  );
      };

      const handlefavpersonsubmit=async(e)=>{

            e.preventDefault();

            const favperregresult=await axios.post( "http://localhost:3000/api/basetoroute/favperreg" , favperson );

            console.log(  favperregresult.data.datas  );

            

      };

return <>

          <h1>Register here:</h1>
          <br></br>  <br></br>

         <div>
                <form onSubmit={handleregister} >

            <label>Email</label>
            <input placeholder="enter your email" name="email" onChange={handlechange} />

            <label>Password</label>
            <input placeholder="enter your email" name="password" onChange={handlechange} />

              <input type="submit" />

                </form>
         </div>

   <h1>Rgistered users:</h1>

         <div>
                <table border="2">
                  
                  <thead>                        <tr>
             <th>User Id</th>   <th>Email</th>  <th>password</th>
                        </tr>    </thead>

                   <tbody>
              {  showreg.map((e)=>(   <tr key={e._id}>

                            <td>{e._id}</td>
                            <td>{  e.email  }</td>
                            <td>{  e.password }</td>  </tr>  ))
              
                            
                        }     </tbody>
                        
                </table>
              
         </div>


      <br></br>  <br></br>  <br></br>


      <h1>Favourite person register</h1>

      <br></br>

      <div>
             <form onSubmit={handlefavpersonsubmit}>
   
               <div>
                     <label>Name:</label> 
                      <input name="name" placeholder="enter your fav person name" onChange={handlefavpersonchange}/>
               </div>

               <br></br>
               
               <div>
                     <label>Current role:</label> 
                      <input name="role" placeholder="enter his/her role" onChange={handlefavpersonchange}/>
               </div>
               <br></br>
               <div>
                     <label>City:</label> 
                      <input name="city" placeholder="enter city" onChange={handlefavpersonchange}/>
               </div>
               <br></br>
               <div>
                     <label>Net worth:</label> 
                      <input name="networth" placeholder="enter net worth" onChange={handlefavpersonchange}/>
               </div>
               <br></br>
               <div>
                     <input type="submit" />
               </div>

             </form>
      </div>

      <br></br>
      <br></br>

      <div>
             {  showfavperreg.map((e)=>(   <div key={e._id}>

                              <h2>{e.name}</h2> 
                              <h2>{e.role}</h2> 
                              <h2>{e.city}</h2> 
                              <h2>{e.networth}</h2> 


             </div>    ))  }
      </div>
</>

};

export default App;