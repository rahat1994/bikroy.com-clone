const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    owner: {
        type: String,
        required: true
    },
    tags: {
      type: String,
      required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    contact_no: {
        type: String,
        required: true
    },
    is_sold: {
        type: Boolean,
        required: true,
        default: false
    },
    created_at: {
      type: Date,
      required: true,
      default: Date.now
    },
    updated_at: {
        type: Date,
        required: true,
        default: Date.now
      }
  })

  module.exports = mongoose.model('Item', itemSchema)