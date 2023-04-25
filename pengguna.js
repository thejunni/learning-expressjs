const express = require("express");
const router = express.Router();
const userController = require("./controller/userController");

router.route("/pengguna").get(userController.index).post(userController.store);
router.put("/pengguna/:id", userController.update);
router.delete("/pengguna/:id", userController.delete);

module.exports = router;
