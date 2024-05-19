const asyncHandler =require('express-async-handler')
const Goal = require('../models/goalModel')

//get user goals
const getGoals= asyncHandler(async (req,res)=>{
    const goals = await Goal.find({user:req.user.id})
   res.status(200).json(goals) 
})

//add user goals
const setGoal=asyncHandler(async (req,res)=>{
    if(!req.body.text){
        res.status(400)
        throw new Error("please add text file")
    }
    const goal =await Goal.create({
        text: req.body.text,
        user:req.user.id
    })
    res.status(200).json(goal) 
 })

//update user goals
const updateGoal=asyncHandler( async (req,res)=>{

    const goal=await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }
     
    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    //make sure logged in uses matches the goal user
    if(goal.user.toString() !== req.user.id){
     res.status(401)
     throw new Error('User not authorized')
    }
    const updatedGoal=await Goal.findByIdAndUpdate(req.params.id,req.body,{
        new:true
    })
    res.status(200).json(updatedGoal) 
 })

//delete user goal
const deleteGoal=asyncHandler( async (req,res)=>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('Goal not found')
    }


    //check for user
    if(!req.user){
        res.status(401)
        throw new Error('User not found')
    }
    //make sure logged in uses matches the goal user
    if(goal.user.toString() !== req.user.id){
     res.status(401)
     throw new Error('User not authorized')
    }
    
    await Goal.deleteOne({_id:req.params.id})
    res.status(200).json({id:req.params.id}) 
 })



module.exports={
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}