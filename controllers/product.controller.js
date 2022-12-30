const Product = require('../models/product.model')


/**
 * @function createProduct for creating a new product
 * Verify if the product exist in the database else create product
 * @params (req, res)
 */
module.exports.createProduct = async(req, res, next) =>{
    try{
        const product = await Product.findOne({title: req.body.title})
        if(product) return res.status(404).json({status: "failed", msg: "Product already exits", product})
        const newProduct = await Product.create(req.body)
        res.status(201).json({status: "success", data: newProduct})

    }catch(err){
        next({msg: "Oops! something went wrong couldn't create product", err})
    }
}


/**
 * @function getProducts for getting the list of products
 * @params (req, res)
 */
module.exports.getProducts = async(req, res, next) =>{
    try{
        const product = await Product.find({})
        res.status(201).json({status: "success", data: product})

    }catch(err){
        next({msg: "Oops! something went wrong couldn't get products", err})
    }
}

/**
 * @function getProduct for getting a single product
 * Verify if the product exist in the database 
 * if true get the product
 * @params (req, res)
 */

module.exports.getProduct = async(req, res, next)=>{
    const {id} = req.params
    Product.findById(id)
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product) return res.status(404).json({status: "failed", msg: "product not found"})

        res.status(200).json({status: "success", data: product})
    }catch(err){
        next({msg: "Oops! something went wrong couldn't get product", err})
    }
}


  /*
 * @function updateProduct a Product if exist
 * @params(req,res, next)

*/
module.exports.updateProduct = async(req, res, next)=> {
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product) return res.status(404).json({status: "failed", msg: "product not found"})

        const updatedProduct = await Product.findByIdAndUpdate(id, {$set:req.body}, {new: true})
        res.status(200).json({status: "success", data: updatedProduct})

    }catch(err){
        next({msg: "something went wrong couldn't update product", err})
    }
  }


/*
 * @function Delete a product if exist
 * @params(req,res, next)

*/

module.exports.removeProduct = (req, res, next) => {
    Product.findByIdAndRemove(
        req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data,
        });
      }
    });
  };


