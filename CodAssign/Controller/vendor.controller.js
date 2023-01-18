const VendorModel = require("../models/vendor.model");




const registerVendor = async (req,res) => {
    const { name, email, address, products } = req.body;
    // console.log(req.body);
    const vendor = await VendorModel.create({name, email, address, products})
    console.log(vendor);
    if (vendor) {
        res.status(201).send(vendor);
      } else {
        res.status(400).send({message:"error creating vendor"})
        
      }
}

const getVendor = async (req,res) => {
    const prod = await VendorModel.find({})
    console.log(prod);
    if (prod) {
        res.status(201).send(prod);
      } else {
        res.status(400).send({message:"error creating vendor"})
        
      }
}


module.exports = { registerVendor,getVendor };

// order data : - client info, prod wth qty  = array
// fetch all vendors details  
// run for loop in vendors array
// obj ={vendor = null,price =infinity}
// run for loop in vendor => prod  array
// if prod is exist and its price is less than minimum ..... then update min by price