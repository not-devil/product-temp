const cloudinary = require('cloudinary')
const multer = require('multer');
const BigPromice = require('../controller/BigPromice');

const upload = multer({ dest: 'uploads/' });

exports.Uploadimg = BigPromice(async (req, res, next) =>{
  
  upload.array('images');
 
})

module.exports = store = multer({ storage: storage });
