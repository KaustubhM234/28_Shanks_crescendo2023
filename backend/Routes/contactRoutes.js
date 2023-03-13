const express = require('express')
const router = express.Router()
const contact = require('../models/contactSchema')

router.post("/contact",async(req,res)=>{
    try {
        contact.create({
            name :req.body.name,
            email :req.body.email,
            subject :req.body.subject,
            messagetext:req.body.messagetext,
        })
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
})

module.exports = router