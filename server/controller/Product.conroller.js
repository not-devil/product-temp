const Products = require("../model/Product.model");
const BigPromise = require("./BigPromice");
const CustomError = require("../middleware/CustomeError");
const cloudinary = require("cloudinary");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

exports.addnewproduct = BigPromise(async (req, res, next) => {
  // images

  let imageArray = [];

  // if (!req.files) {
  //   return next(new CustomError("images are required", 401));
  // }

  if (req.files) {
    for (let index = 0; index < req.files.photos.length; index++) {
      let result = await cloudinary.v2.uploader.upload(
        req.files.photos[index].tempFilePath,
        {
          folder: "products",
        }
      );

      imageArray.push({
        id: result.public_id,
        secure_url: result.secure_url,
      });
    }
  }

  req.body.photos = imageArray;

  const product = await Products.create(req.body);

  res.status(200).json({
    success: true,
    product,
  });
});

exports.getallproduct = BigPromise(async (req, res, next) => {
  const totalcountProduct = await Products.countDocuments();
  const allPoductDisplay = await Products.find();

  res.status(200).json({
    allPoductDisplay,
  });
});

exports.updateproduct = BigPromise(async (req, res, next) => {
  let product = await Products.findById(req.params.id);

  if (!product) {
    return next(new CustomError("No product found with this id", 401));
  }
  let imagesArray = [];

  if (req.files) {
    //destroy the existing image
    for (let index = 0; index < product.photos.length; index++) {
      const res = await cloudinary.v2.uploader.destroy(
        product.photos[index].id
      );
    }

    for (let index = 0; index < req.files.photos.length; index++) {
      let result = await cloudinary.v2.uploader.upload(
        req.files.photos[index].tempFilePath,
        {
          folder: "products", //folder name -> .env
        }
      );

      imagesArray.push({
        id: result.public_id,
        secure_url: result.secure_url,
      });
    }
  }

  req.body.photos = imagesArray;

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});

exports.deleteproduct = BigPromise(async (req, res, next) => {
  const product = await Products.findById(req.params.id);
  if (!product) {
    return next(new CustomError("No product found with this id", 401));
  }
  for (let index = 0; index < product.photos.length; index++) {
    const res = await cloudinary.v2.uploader.destroy(product.photos[index].id);
  }
  await product.remove();
  res.status(200).json({
    success: true,
    message: "Product was deleted !",
  });
});
