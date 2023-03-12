const express = require('express')
const router = express.Router()
const course = require('../models/courseSchema')
const courseCat = require('../models/courseCatSchema')

router.post("/createcourse",async(req,res) =>{
    try {
        await course.create({
            img : req.body.img,
            name : req.body.name,
            description : req.body.description,
            category : req.body.category,
        })
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

router.post("/coursecat",async(req,res) =>{
    try {
        await courseCat.create({
            category : req.body.category,
        })
        res.json({success:true});
    } catch (error) {
        console.log(error)
        res.json({success:false});
    }
})

module.exports = router