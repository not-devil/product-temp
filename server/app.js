require("./config/connect").connect();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const  cors = require('cors')

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(bodyParser.json());

// serving static files
app.use(express.static(path.join(__dirname, "public")));

// app.set('view engine', 'hbs');
// app.engine('hbs', hbs({
//     extname: 'hbs',
//     defaultView : 'default',
//     layoutsDir : path.join(__dirname , 'views'),
//     partialsDir : path.join(__dirname, 'views/partials')
// }))

const addnewproduct = require("./router/Product.router");
const getallproduct = require("./router/Product.router");
const updateproduct = require("./router/Product.router");
const deleteproduct = require("./router/Product.router");

// const { addnewproduct, getallproduct,updateproduct, deleteproduct  } =
// // router middelware
// app.use('/api/v1/', hotels);
app.use("/api/", addnewproduct);
app.use("/api/", getallproduct);
app.use("/api/", updateproduct);
app.use("/api/", deleteproduct);

// export app js
module.exports = app;
