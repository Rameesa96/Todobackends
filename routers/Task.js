const express =require('express')
const router =express.Router()
const Task =require('../models/Task')
router.use(express.json())
 
router.post('/',async(req,res)=>{
    const task = new Task(req.body)

    try{
const savedtask = await task.save()
res.status(200).json(savedtask)
    }
    catch(err){
        res.status(500).json(err.message)
    }
})


router.get('/getall',async(req,res)=>{
   

    try{
const savedtask = await Task.find()
res.status(200).json(savedtask)
    }
    catch(err){
        res.status(500).json(err.message)
    }
})
router.get('/:id',async(req,res)=>{
   

    try{
const savedtask = await Task.findById(req.params.id)
res.status(200).json(savedtask)
    }
    catch(err){
        res.status(500).json(err.message)
    }
})

router.delete('/delete/:id',async(req,res)=>{
   

    try{
const savedtask = await Task.findByIdAndDelete(req.params.id)
res.status(200).json("deleted")
    }
    catch(err){
        res.status(500).json(err.message)
    }
})


router.put('/edit/:id',async(req,res)=>{
   

    try{
const savedtask = await Task.findByIdAndUpdate(req.params.id,{$set:{
    Name:req.body.Name,
    Priority:req.body.Priority,
    Status:req.body.Status
}},{new:true})
res.status(200).json(savedtask)
    }
    catch(err){
        res.status(500).json(err.message)
    }
})
module.exports = router