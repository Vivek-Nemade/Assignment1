const express = require("express");
const { registerVendor, getVendor } = require("../Controller/vendor.controller");


const vendor = express.Router();

vendor.post("/signup", registerVendor);
vendor.get("/get", getVendor);


module.exports = vendor;