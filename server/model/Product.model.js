const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productname: {
    type: String,
    trim: true,
  },
  productdec: {
    type: String,
    default: null,
  },
  productprice: {
    type: Number,
    default: null,
  },
  productcategory: {
    type: String,
    default: null,
  },
  photos: [
    {
      public_id: {
        type: String,
      },
      secure_url: {
        type: String,
      }
    }
  ],
});

module.exports = mongoose.model("product", ProductSchema);
//productmodel is single data table row
// schema is a table structure
