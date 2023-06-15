const router=require("express").Router();
const Task=require("../model/task");


router.post("/create",async(req,res)=>{
    try {
        const newTask=new Task({
            title:req.body.title,
            desc:req.body.desc
        })
        await newTask.save();
        res.status(200).json(newTask);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put("/update/:id",async(req,res)=>{
        try {
            const updatedTask=await Task.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updatedTask);
        } catch (err) {
            res.status(500).json(err);
        }
})
router.delete("/delete/:id",async(req,res)=>{
    console.log(req);
    try {
        await Task.findById(req.params.id);
        try {
            await Task.findByIdAndDelete(req.params.id);
            res.status(200).json("Task deleted Successfully");
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(err);
    }
    
})
router.get("/tasks",async(req,res)=>{
    try {
        const tasks= await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.get("/tasks/:id",async(req,res)=>{
    try {
        const task=await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (err) {
        res.status(500).json(err);
    }
})
module.exports=router;