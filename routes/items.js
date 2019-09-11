const express = require('express')
const router = express.Router()
const Item = require('../models/item')
// Get all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find()
        console.log(items);
        res.json(items)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
  })

// Get one item
router.get('/:id', getItem,(req, res) => {

    res.json(res.item)
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
router.patch('/:id', getItem, async (req, res) => {
    if (req.body.name != null) {
        res.item.name = req.body.name
    }

    if (req.body.owner != null) {
        res.item.owner = req.body.owner
    }

    if (req.body.tags != null) {
        res.item.tags = req.body.tags
    }

    if (req.body.description != null) {
        res.item.description = req.body.description
    }

    if (req.body.price != null) {
        res.item.price = req.body.price
    }

    if (req.body.contact_no != null) {
        res.item.contact_no = req.body.contact_no
    }

    if (req.body.is_sold != null) {
        res.item.is_sold = req.body.is_sold
    }

    try {
        const updateditem = await res.item.save()
        res.json(updateditem)
    } catch {
        res.status(400).json({ message: err.message })
    }
})

// Delete one item
router.delete('/:id', getItem, async (req, res) => {
    
    try {
        await res.item.remove()
        res.json({ message: 'Deleted This item' })
      } catch(err) {
        res.status(500).json({ message: err.message })
      }
})

async function getItem(req, res, next) {
    try {
        item = await Item.findById(req.params.id)

        if (item == null) {
            return res.status(404).json({ message: 'Cant find item'})
        }
    } catch(err){
        return res.status(500).json({ message: err.message })
    }

    res.item = item
    next()
}

module.exports = router