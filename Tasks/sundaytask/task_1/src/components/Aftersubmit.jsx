import {  useState } from "react";

const Aftersubmit=()=>{


        

          const [show,setShow]=useState(false);

          const [val,setVal] = useState("");

          let styles={  backgroundColor: val==="on"?"green" :  val==="off"?"red" : val==""?"" : "yellow" };
          



return <>

      <p className="text-3xl font-serif mt-30 ml-50">Shows output after submit...</p>

      <input onChange={ (e)=>{  setVal( e.target.value.toLowerCase() )   
        }  }  className="border-2 mt-20 mb-20 p-3 ml-170 rounded"  placeholder="On or OFF"  />

      <button className="bg-purple-400 p-3 rounded border-2 font-serif"
       onClick={  ()=>{

                           
                          setShow(!show)

       }  }>Submit</button>

      {  show?<div style={styles} className=" p-50 ml-150 mr-160 font-extrabold rounded">{ val==""?"" :val==="on"?"ON" : val==="off" ? "OFF" :"Normal" }</div>:""   }


    

</>

};

export default Aftersubmit;