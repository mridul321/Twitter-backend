const router = require('express').Router()

const Tweet = require('../models/Tweet')

router.post('/new',async (req,res) => {                     //posting a new tweet by express route
    const data = req.body

    try{
        const response = await Tweet.insertMany(data)       //inserting tweets in the database with the help of tweet model
        res.json({newId: response._id})                     //returning id of the newly created tweet
    }
    catch(err){
        res.json({error: err})
    }
   
})

router.get('/:id',async (req,res) => {                      //returning data of the tweet by using the id returned from the url
    const id = req.params.id

    try{
        const response = await Tweet.findById(id)
        res.json({newId: response})
    }
    catch(err){
        res.json({error: err})
    }
   
})


module.exports = router