const router = require('express').Router()
const productRoute = require('./product.routes')
const userRoute = require('./user.routes')
const orderRoute = require('./order.routes')

module.exports = () =>{
    router.use('/products', productRoute())
    router.use('/orders', orderRoute())
    router.use('/users', userRoute)
    return router
}
