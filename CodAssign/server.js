const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");


const app = express();
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({ extended: true }));

const vendorRoutes = require("./routes/vendor.route")
const oderRoutes = require("./routes/newOrder.route")
const commitRoutes = require("./routes/final.route")
app.use("/vendor",vendorRoutes);
app.use("/order",oderRoutes);
app.use("/final",commitRoutes);
app.get("/", (req, res) => res.send("API is running"));

app.listen(PORT, async () => {
    await connectDB();
    console.log(`server started on port ${PORT}`);
  });