import { useEffect, useState  } from "react";
import {Route, Routes, useNavigate} from 'react-router-dom';
import axios from "axios";
import Login from "./Login";

const App=()=>{


         const [ passenger , setPassenger ] = useState({name:"",fromjn:"",tojn:"",date:""});

         const [showpassengers , setShowpassengers] = useState([]);

         const [ passid , setPassid ] = useState(null);


         const handlechange=(e)=>{

               setPassenger( { ...passenger , [e.target.name]:e.target.value } );

         };

         const handlesubmit=async(e)=>{

               e.preventDefault();

               const createpassenger=await axios.post(  "http://localhost:3000/api/base/create" , passenger  );

               alert(createpassenger.data.msg);

               setPassenger({name:"",fromjn:"",tojn:"",date:""});

         };


         const fetchpassengers = async()=>{

               const fetpas= await axios.get( "http://localhost:3000/api/base/get" );

               setShowpassengers(fetpas.data.temp);

         };

         useEffect(  ()=>{    (  async()=>{ await fetchpassengers();  }  )()
         } , [passenger]  );


         const handleEdit=async(id)=>{

                const editres = await axios.get(`http://localhost:3000/api/base/edit/${id}`);

                setPassenger(editres.data.temp);

                setPassid(id);

         };

         const handleUpdate=async()=>{

                const updateres = await axios.put( `http://localhost:3000/api/base/upd/${passid}`,passenger );

                setPassenger(updateres.data.temp);

                alert(`successfully updated ${updateres.data.temp.name}`);

                setPassenger({name:"",fromjn:"",tojn:"",date:""});

                setPassid(null);

         };


         const [user,setUser]=useState({email:"",pass:""});

         const handlelog=(e)=>{

               setUser({...user , [e.target.name]:e.target.value});

         };

         const navigate = useNavigate();


         const handlelogsub=async(e)=>{

                 e.preventDefault();

               const registerres=await axios.post("http://localhost:3000/api/login/create",user);

               alert(registerres.data.msg);


               navigate("/login");

               


         };




return <>


    <Routes>
         
         <Route path="/" element={<App/>} />
         <Route path="/login" element={<Login/>}  />

    </Routes>


          <h1 className="font-serif text-4xl mt-20 ml-50" >Train Ticket Booking:</h1>

   <div>

      <form className="bg-cyan-200 pb-10 " onSubmit={handlesubmit} >

               <input required onChange={handlechange} value={passenger.name} name="name" className="p-2 rounded border-1 ml-150 mt-20" placeholder="Enter Your Name" />

               <input required onChange={handlechange} value={passenger.fromjn} name="fromjn" className="p-2 rounded border-1 ml-150 mt-10" placeholder="Enter Starting junction" />

               <input required onChange={handlechange} value={passenger.tojn} name="tojn" className="p-2 rounded border-1 ml-150 mt-10" placeholder="Enter Destination junction" />

               <input required onChange={handlechange} value={passenger.date} name="date" className="p-2 rounded border-1 ml-150 mt-10 pl-10 pr-7" placeholder="Enter Your Name" type="date" />
<br></br>
               {  passid ?<button onClick={ handleUpdate  } className="p-2 rounded border-1 bg-orange-500 ml-140 mt-10 pl-30 pr-30" type="button" > Update </button> : <input type="submit" className="p-2 rounded border-1 bg-green-500 ml-140 mt-10 pl-30 pr-30"/>
 }
      </form>

   </div>


   <div className="mt-20 w-[90%] mx-auto">

  
  <div className="grid grid-cols-6 bg-gray-100 p-4 rounded-t-xl shadow font-semibold text-lg text-gray-700 border">
    <p>Train No</p>
    <p>Passenger Name</p>
    <p>From</p>
    <p>To</p>
    <p>Date</p>
    <p className="text-center">Actions</p>
  </div>


  <div className="border border-t-0 rounded-b-xl shadow">
    {showpassengers.map((e) => (
      <div
        key={e._id}
        className="grid grid-cols-6 p-4 items-center border-b hover:bg-gray-50 transition"
      >
        <p className="font-medium text-gray-800">{e._id}</p>
        <p className="font-medium text-gray-800">{e.name}</p>
        <p>{e.fromjn}</p>
        <p>{e.tojn}</p>
        <p>{e.date}</p>

      
        <div className="flex gap-3 justify-center">
          <button   onClick={ ()=>{  handleEdit(e._id)  }   }   className="px-4 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Edit
          </button>
          <button className="px-4 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>





<div>

<p className="text-5xl mt-40 ml-50 mb-30">Register</p>


<form onSubmit={handlelogsub}>

         <input onChange={handlelog} name="email" className="border-1 p-4 ml-150" placeholder="enter your email" />

          <input onChange={handlelog} name="pass" className="border-1 p-4" placeholder="enter password" />

          <input className="border-1 p-4 bg-amber-400 mb-50" placeholder="enter password" type="submit" />

</form>







</div>







</>

};

export default App;