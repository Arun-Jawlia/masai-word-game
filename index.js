const express = require('express');
const { connection } = require('./config/db');
const { UserRouter } = require('./routes/user.route');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors())
app.get('/',(req,res)=>
{
    res.send('Welcome to homepage')
})


app.use('/user',UserRouter)


app.listen(8080,async()=>
{
    try{
        await connection
        console.log("Listening on 8080")
        console.log('Db is connected')

    }
    catch(err)
    {
        console.log("Listening on port 8080")
        console.log('Db is not connected')
    }

    console.log("Server is running on port 8080")

})