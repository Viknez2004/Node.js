import { useEffect, useState } from "react";
import axios from 'axios';

const App=()=>{

    
          const [inp , setInp] = useState({ name:"" , age:"" }); 

          const [showdatas , setShowdatas] = useState([]); 

          const [id,setId] = useState(null);

          const handleinpchange=(e)=>{

                 setInp(  {  ...inp , [e.target.name]:e.target.value  }  );

          };

          const handleinpsubmit=async(e)=>{

                 e.preventDefault();

                 const rescreate = await axios.post(  "http://localhost:3000/api/base/create" , inp  );

                 const temp = await rescreate.data.msg

                 alert(temp);

                 setInp({ name:"" , age:"" });

          };

          const handleshowdatas=async()=>{

                const resget = await axios.get( "http://localhost:3000/api/base/get" );

                setShowdatas(resget.data.temp);

          };


          useEffect(  ()=>{   
            
                                  (  async()=>{ await  handleshowdatas()    }  )()
          
          }  , [ inp , showdatas ]  );

          const handleEdit=async(id)=>{

               const resgettoshow = await axios.get( `http://localhost:3000/api/base/user/${id}` );

                setId(id);

                setInp(resgettoshow.data.tempid);                 

          };

          const handleeditandchange=async()=>{

              const resupdate = await axios.put( `http://localhost:3000/api/base/update/${id}`, inp  );

                
                alert( resupdate.data.msg );

                setId(null);

                setInp({ name:"" , age:"" });


          };

          const handleDel=async(id)=>{

              const resdel = await axios.delete(`http://localhost:3000/api/base/del/${id}`);

              alert(resdel.data.msg);

          };
     

return <>


          <h2>Register Form:</h2>

          <div>

         <form onSubmit={handleinpsubmit}>

      <input placeholder="Enter Your Name" value={inp.name} name="name" onChange={handleinpchange} />            <br></br>

    <input placeholder="Enter Your Age " value={inp.age} name="age" onChange={handleinpchange} />   <br></br>  <br></br>

            { id?<button type="button" onClick={ handleeditandchange } >Update</button> : <input type="submit" /> }                           <br></br>  <br></br>

         </form>

          </div>

          <div>

       <table border="1"   >

            <thead>
                    <tr>
                         <th>Name</th>
                         <th>Age</th>
                         <th colspan="2">Action</th>
                    </tr>
            </thead>
            <tbody>
                      {  showdatas.map(  (e)=>(<tr key={e._id}>
                         <td>{e.name}</td>
                         <td>{e.age}</td>
                         <td><button  onClick={  ()=>{  handleEdit(e._id)  }  } >Edit</button></td>
                         <td><button onClick={()=>{  handleDel(e._id)  }}>Delete</button></td>
                    </tr>)  )  }
            </tbody>

       </table>

          </div>


</>

};

export default App;