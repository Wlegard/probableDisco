const mongoose = require("mongoose");
const { Schema, model } = mongoose;
mongoose.connect('mongodb://localhost:27017/slimewire')
.then(() => {
    console.log('✔️ successful db connection');
})

.catch(err => {
    console.log('❌ unsuccessful db connection', err);
});


const Avatar = new Schema(
    {
// description, 
    }
);

// mary here 

module.exports = {


}