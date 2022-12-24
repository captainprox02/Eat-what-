const express = require("express");
const router = express.Router();
const admin = require("../app/http/middleware/admin");
const guest = require("../app/http/middleware/guest");

const foodController = require("../app/http/controllers/food/FoodController");

router.get("/:id", foodController.viewDetails);

module.exports = router;