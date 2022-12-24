const express = require("express");
const router = express.Router();
const orderController = require("../app/http/controllers/customers/OrderController");
const auth = require("../app/http/middleware/auth");

router.get("/orders", auth, orderController.index);
router.post("/orders", auth, orderController.store);
router.get("/orders/:id", auth, orderController.status);
router.post("/cancel-order/:id", auth, orderController.cancel);

module.exports = router;
