const Order = require('../models/orders.model')


/**
 * @function createOrder for creating a new order
 * @params (req, res)
 */
module.exports.createOrder = async(req, res, next) =>{
    try{
        const newOrder = await Order.create(req.body)
        res.status(201).json({status: "success", data: newOrder})
    }catch(err){
        next({msg: "Oops! something went wrong couldn't create order", err})
    }
}


/**
 * @function getOrders for getting the list of orders
 * @params (req, res)
 */
module.exports.getOrders = async(req, res, next) =>{
    try{
        const order = await Order.find({})
        res.status(201).json({status: "success", data: order})

    }catch(err){
        next({msg: "Oops! something went wrong couldn't get orders", err})
    }
}

/**
 * @function getOrder for getting a single order
 * Verify if the order exist in the database 
 * if true get the order
 * @params (req, res)
 */

module.exports.getOrder = async(req, res, next)=>{
    const {id} = req.params
    Order.findById(id)
    try{
        const {id} = req.params
        const order = await Order.findById(id)
        if(!order) return res.status(404).json({status: "failed", msg: "order not found"})

        res.status(200).json({status: "success", data: order})
    }catch(err){
        next({msg: "Oops! something went wrong couldn't get order", err})
    }
}


  /*
 * @function updateOrder a Order if exist
 * @params(req,res, next)

*/
module.exports.updateOrder = async(req, res, next)=> {
    try{
        const { id } = req.params
        const order = await Order.findById(id)
        if(!order) return res.status(404).json({status: "failed", msg: "order not found"})

        const updatedOrder = await Order.findByIdAndUpdate(id, {$set:req.body}, {new: true})
        res.status(200).json({status: "success", data: updatedOrder})

    }catch(err){
        next({msg: "something went wrong couldn't update Order", err})
    }
  }



/*
 * @function fetch orders for a particular user
 * @params(req,res)

*/
module.exports.fetchUserOrders = async(req, res, next)=>{
    const {id} = req.params
    Order.find({user_id: id }, (err, orders)=>{
        if(err){
            return res.status(400).json({success: false, error: er})
        }
        if(!orders.length){
            return res.status(404).json({success:false, error:"Oops no orders found"})
        }
        return res.status(200).json({success:true, data:orders})
    })
}



/*
 * @function Delete an Order if exist
 * @params(req,res, next)

*/

module.exports.removeOrder = (req, res, next) => {
    Order.findByIdAndRemove(
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


