const express = require('express')
const router = express.Router()
const Item = require('../models/item')
// Get all items
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

// Get one item
router.get('/:id', (req, res) => {
})

// Create one item
router.post('/', async (req, res) => {

    const item = new Item({
      name: req.body.name,
      owner:req.body.owner,
      tags:req.body.tags,
      description:req.body.description,
      price:req.body.price,
      contact_no:req.body.contact_no      
    })
    
    try {
        const newItem = await item.save()
        res.status(201).json(newItem)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }  
})

// Update one item
router.patch('/:id', (req, res) => {
})

// Delete one item
router.delete('/:id', (req, res) => {
    
})


module.exports = router