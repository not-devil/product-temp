const mongoose = require('mongoose');
const {MONGODB_URL} = process.env


mongoose.set('strictQuery', false);
exports.connect= () =>{
    mongoose
    .connect(MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(console.log(`Db connect successfull ${MONGODB_URL}`))
    .catch(error => {
        console.log(`DB Connection Failed`);
        console.log(error)
        process.exit(1);
    })
}
 
