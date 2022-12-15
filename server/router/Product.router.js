const express = require("express");
const router = express.Router();

const {
  addnewproduct,
  getallproduct,
  updateproduct,
  deleteproduct,
} = require("../controller/Product.conroller");

router.route("/products").post(addnewproduct);
router.route("/products").get(getallproduct);
router.route("/products").put(updateproduct);
router.route("/products").delete(deleteproduct);

module.exports = router;
