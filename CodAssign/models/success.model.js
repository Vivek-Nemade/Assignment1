const { Schema, model, default:mongoose } = require("mongoose");


const successSchema = new Schema({
    order :{
        type: mongoose.Schema.Types.ObjectId,
                    required: true,
                    ref: "newOrder",
    }
})

const finalModel = model("finalOrder", successSchema);

module.exports = finalModel;