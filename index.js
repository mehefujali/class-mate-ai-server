const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 4000
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const noteRoutes = require('./routes/noteRoutes')
const aiRoutes = require('./routes/aiRoutes');
dotenv.config()

//Middle ware 

app.use(cors())
app.use(express.json())



// Db connection 
connectDB()
// routes
app.use('/api/notes' , noteRoutes)

/// Ai route
app.use('/api', aiRoutes);

app.get('/',(req,res)=>{
       res.status(200).json({
            message: "surver is running"
       })
})
app.listen(port,()=>{
      console.log(`SURVER IS RUNNING ON ${port}`)
})