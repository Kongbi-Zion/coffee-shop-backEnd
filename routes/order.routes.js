const router = require('express').Router()
const orderController = require('../controllers/order.controller')

module.exports = () =>{
    router.post("/create", orderController.createOrder)
    router.get("/", orderController.getOrders)
    router.get("/:id", orderController.getOrder)
    router.put("/update/:id", orderController.updateOrder)
    router.get("/usersOrders/:id", orderController.fetchUserOrders)
    router.delete("/:id/remove", orderController.removeOrder)
    return router
}