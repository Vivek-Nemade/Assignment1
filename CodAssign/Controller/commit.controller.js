


const orderModel = require("../models/newOrder.model");

const finalModel = require("../models/success.model");



const commitOrder= async (req,res) => {
    const { OrderId}= req.body;

    
    const orderDetails = await orderModel.findOne({_id:OrderId}).populate({path:"products", populate: "name"})
    if(orderDetails){
        const finalOrder = await finalModel.create({order:orderDetails})
        const order = await finalModel.findOne({order:{_id:OrderId}})
        
        return res.status(200).send(order)
    }
   
}   

module.exports = {commitOrder};
