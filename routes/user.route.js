const express = require('express');
const { UserModel } = require('../models/user.model');

const UserRouter = express.Router()



UserRouter.get('/',async(req,res)=>
{
    // res.send('Hello I am on Homepage for Signup')
    try{
        const users =await UserModel.find()
    res.send(users)
    }
    catch(err)
    {
        console.log('Error in userRouter', err)
    }
})






UserRouter.post('/signup',async(req,res)=>
{
    const {name,difficulty}= req.body
    console.log(req.body)

    const userPresent = await UserModel.findOne({name:name})
    if(userPresent?.name)
    {
        res.send({ msg: "Try Different Name" })
    }
    else{
        try{
            const user = await UserModel({name,difficulty})
        await user.save()
        res.send({ msg: "New User",user} )

        }
        catch(err)
        {
            console.log(err)
            res.send({msg:"error in signup"})

        }

    }


})



UserRouter.get('/find/:level', async(req,res)=>
{
    const level = req.params.level
   let newUser =  await UserModel.find({difficulty:level})
    res.send(newUser)
})







module.exports = {
    UserRouter
}