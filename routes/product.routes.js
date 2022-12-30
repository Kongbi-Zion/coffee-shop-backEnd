const router = require('express').Router()

const productController = require('../controllers/product.controller')
module.exports = () =>{
    router.post("/create", productController.createProduct)
    router.get("/", productController.getProducts)
    router.get("/:id", productController.getProduct)
    router.put("/update/:id", productController.updateProduct)
    router.delete("/:id/remove", productController.removeProduct)
    return router
}