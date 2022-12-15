require("dotenv").config();
const app = require("./app");
const cloudinary = require("cloudinary");

//cloudenery configruration 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secrete: process.env.CLOUDINARY_API_SECRET,
    secure: true
})

app.listen(process.env.ECPORT, ()=>{
    console.log(`server log running on port: ${process.env.ECPORT}`)
});