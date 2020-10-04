const router = require('express').Router()


const User = require('../models/User')

router.post('/new',async (req,res) => {
    const data = req.body

    try{
        const response = await User.insertMany(data)                //for creating a new user
        res.json({newId: response._id})
    }
    catch(err){
        res.json({error: err})
    }
   
})

router.get('/:id',async (req,res) => {
    const id = req.params.id

    try{                                                            //for finding out user by its unique id
        const response = await User.findById(id)
        res.json({newId: response})
    }
    catch(err){
        res.json({error: err})
    }
   
})


module.exports = router