import { useState } from "react";

const Whiletyping=()=>{


        const [bg,setBg] = useState("");

        const styles={   backgroundColor: bg   }


return <>
   
       <p className="mt-30 ml-50 text-3xl font-sans">Changes the background while typing.....</p>

       <input style={styles} onChange={  (e)=>{setBg(e.target.value)}  }  className="border-3 mt-20 p-40 ml-150 rounded-xl" placeholder="Enter any color to change"  />

</>

};

export default Whiletyping;