import { useReducer } from "react";



         const reducer=(state,action)=>{

              if(  action.type=="val"  )
              {
                   return { ...state , val:action.value.toLowerCase()  };
              }

              if(  action.type=="toggle"  )
              {
                   return {  ...state , show:action.value  };
              }

         };



const Usingreduce=()=>{

    
         const [state,dispatch]=useReducer(reducer,{  val:"" , show:false });

         const styles={  backgroundColor:state.val=="on"?"green":state.val=="off"?"red":state.val==""?"" :"yellow"  }



return <>

           <p className="ml-50 font-serif text-3xl mt-20">Using useReducer.....</p>

           <input  onChange={  (e)=>{  dispatch({type:"val" , value:e.target.value })  }  } 
           
           placeholder="On or Off" className="border-2 mt-45 ml-170 rounded p-3 mb-10"  />

           <button onClick={ ()=>{   dispatch( { type:"toggle" , value:!state.show }  );    }  } className="bg-blue-600 p-3 rounded border-2" >Submit</button>

    
{  state.show ?  <div style={styles}className=" text-2xl p-50 ml-150 mb-20 mr-160 font-extrabold rounded" >
            { state.val==="on"?"on" : state.val=="off"?"off" : state.val==""?"":"Normal" } </div> :"" }
</>

};

export default Usingreduce;