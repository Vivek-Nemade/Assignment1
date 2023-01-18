const orderModel = require("../models/newOrder.model");
const VendorModel = require("../models/vendor.model");


const placeOrder = async(req,res)=>{
    const { name, email, address, products } = req.body;

    const vendors = await VendorModel.find({})

    
        for(let k=0; k<products.length; k++){

            // let obj = { vendor:null, price: Infinity}
            products[k].price= Infinity;
            products[k].vendor= null;
            for(let i=0; i<vendors.length; i++){
                for(let j=0; j<vendors[i].products.length; j++){
                    if(vendors[i].products[j].prod_name === products[k].prod_name && vendors[i].products[j].price<products[k].price){
                        products[k].vendor = vendors[i]._id;
                        products[k].price = vendors[i].products[j].price;
                    }
                }
            }
            console.log(products)

            if(products[k].vendor==null)
                {
                    return res.status(404).send(`some products are not available:-${products[k].prod_name}`)
                }
    }

    const order = await orderModel.create({name, email, address, products})
                console.log(order);
                    if (order) {
                        res.status(201).send(order._id);
                    } else {
                        res.status(400).send({message:"error creating vendor"})
                        
                    }
    

    
}


const viewOrder = async (req, res) => {
    const { OrderId}= req.body

    const orderDetails = await orderModel.findOne({_id:OrderId}).populate({path:"products", populate: "name"})

    if(orderDetails){
        return res.status(200).send(orderDetails)
    }
    res.status(404).send({message:"Invalid OrderId"})


}

module.exports = {placeOrder,viewOrder}


// order data : - client info, prod wth qty  = array
// fetch all vendors details  
// run for loop in vendors array
// obj ={vendor = null,price =infinity}
// run for loop in vendor => prod  array
// if prod is exist and its price is less than minimum ..... then update min by price