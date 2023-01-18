const mongoose = require("mongoose");

const connectDB = async () => {
  try {
     mongoose.connect(process.env.Mongo_url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected`);
  } catch (e) {
    console.log(`Error: ${e.message}`);
  }
};

module.exports = connectDB;