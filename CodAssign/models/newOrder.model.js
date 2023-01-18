const { Schema, model, default:mongoose } = require("mongoose");

const NewOrderSchema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      address: { type: String, required: true},
      products: 
        [
            {
                prod_name: { type: String, required: true},
                qty: { type: Number, required: true},
                vendor: {
                    type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "vendors",
                },
                price:{ type:Number, required: true}
            }
        ]
    },
    { timestamps: true }
  );

  
const orderModel = model("newOrder", NewOrderSchema);

module.exports = orderModel;


// module.exports = mongoose.models.newOrder || mongoose.model('newOrder', NewOrderSchema);