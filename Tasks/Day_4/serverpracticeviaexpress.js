import express from 'express'


const app=express();

const PORT=6008;

app.listen(PORT , ()=>{
    
     console.log(`https/:localhost:${PORT}`);

});