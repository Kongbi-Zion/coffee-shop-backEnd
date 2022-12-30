const { boolean } = require('joi')
const mongoose = require('mongoose')

const orderSchema = mongoose.Schema(
  {
    user_name: {
      type: String,
    },
    user_email: {
      type: String,
    },
    product_title: {
      type: String,
    },
    quantity: {
      type: String,
    },
    amount: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    status: {
      type: String,
    },
    user_id: {
      type: String,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Orders', orderSchema)
