const express = require("express");
const router = express.Router();
const admin = require("../app/http/middleware/admin");
const adminOrderController = require("../app/http/controllers/admin/OrderController");
const adminStatusController = require("../app/http/controllers/admin/StatusController");
const adminCreateMenuController = require("../app/http/controllers/admin/CreateMenuController");
const adminCreateFood = require("../app/http/controllers/admin/CreateController");
const adminDestroyFood = require("../app/http/controllers/admin/DeleteFood");
const adminEditFood = require("../app/http/controllers/admin/EditFood");
const adminUpdateFood = require("../app/http/controllers/admin/UpdateFood");

router.get("/orders", admin, adminOrderController.index);
router.post("/order/status", admin, adminStatusController.update);
router.post("/store-food", admin, adminCreateMenuController.store);
router.get("/create-food", admin, adminCreateFood.index);
router.post("/food/:id/delete", admin, adminDestroyFood.delete);
router.get("/food/:id/edit", admin, adminEditFood.edit);
router.post("/food/:id/update", admin, adminUpdateFood.update);


module.exports = router;