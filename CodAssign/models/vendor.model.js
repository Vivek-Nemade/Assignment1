const { Schema, model } = require("mongoose");

const VendorSchema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      address: { type: String, required: true},
      products: 
        [
            {
                prod_name: { type: String, required: true},
                qty: { type: Number, required: true},
                price: { type: Number, required: true}
            }
        ]
    }
  )

  
const VendorModel = model("vendors", VendorSchema);

module.exports = VendorModel;