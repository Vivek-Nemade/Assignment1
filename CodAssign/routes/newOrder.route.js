const express = require("express");
const { placeOrder, viewOrder } = require("../Controller/newOrder.controller");



const order = express.Router();

order.post("/place", placeOrder);
order.post("/viewOrder", viewOrder);


module.exports = order;