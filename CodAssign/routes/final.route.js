const express = require("express");
const  {commitOrder}  = require("../Controller/commit.controller");


const commit = express.Router();

commit.post('/commit',commitOrder)

module.exports = commit;