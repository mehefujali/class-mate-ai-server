const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000

//Middle ware 
app.use(cors())
app.use(express.json())









app.get('/',(req,res)=>{
       res.status(200).json({
            message: "surver is running"
       })
})
app.listen(port,()=>{
      console.log(`SURVER IS RUNNING ON ${port}`)
})