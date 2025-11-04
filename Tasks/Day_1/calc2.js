
const isAddOrEven = (x)=>{

      if(  x/2==0  )
      {
          return console.log( ` ${x} is even no`  );
      }
      else
      {
          return console.log(  ` ${x} is add no `  );
      }

};

export const leo=(o)=>{


    if(o==="vijay")
    {
        return console.log("he is leo")
    }

}


export default isAddOrEven;

export const isPrime = (y)=>{


        for(  let i = 2 ; i < y ;  i++  )
            {
                  if(  y/i==0  )
                  {
                      return console.log(  `  ${y} is not a prime number  `  );
                  }
                  else
                  {
                      return console.log(  `  ${y} is a prime number   `  );
                  }
            }   


};


export const timer = (x)=>{
    

     
        setTimeout( ()=>{  console.log(x);   clearInterval(int);   }  ,  4000  );

        const int = setInterval( ()=>{  console.log("hii");    }  , 2000  )

}