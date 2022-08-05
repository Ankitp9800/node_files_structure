const express = require('express');
const router = new express.Router();
const Student = require("../model/student");


router.get("/ankit",(req,res)=>{
     res.send("hello guys");
});

router.get("/",(req,res)=>{
     res.send("listening buddy");
})
//create a new student


router.post("/students",async(req,res)=>{
     try{
          const user = new Student(req.body);
          const createUser =  await user.save();
          res.status(201).send(createUser);
     }catch(e){
          res.status(400).send(e);
     }
  
})

router.get("/students",async(req,res)=>{
     try{
         const studentData=  await Student.find();
     res.status(200).send(studentData);
     }catch(e){
          res.status(400).send(e);
     }
})
router.get("/students/:id",async(req,res)=>{
     try{
          const _id = req.params.id;
          const studentIddata = await Student.findById(_id);
          
          
          if(!studentIddata){
               return res.status(400).send("not found");
          }else{
               res.send(studentIddata);
          }
     }catch(e){
          res.status(400).send(e);
     }
})

router.delete("/students/:id",async(req,res)=>{
     try{
          
          const delData = await Student.findByIdAndDelete(req.params.id);

          if(!req.params.id){
               return res.status(400).send();
          }else{
               res.status(200).send(delData);
          }

     }catch(e){
          res.status(500).send(e);
     }
})

router.patch("/students/:id",async(req,res)=>{
     try{
          const _id = req.params.id; 
          const updatedData = await Student.findByIdAndUpdate(_id, req.body,{
               new: true 
          });
               res.send(updatedData);
     }catch(e){
          res.status(400).send(e);
     }
})



module.exports  = router;