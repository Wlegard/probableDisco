const mongoose = require("mongoose");
const { Schema, model } = mongoose;
mongoose.connect('mongodb://localhost:27017/slimewire')
.then(() => {
    console.log('✔️ succesful db connection');
})

.catch(err => {
    console.log('❌ unsucessful db connection', err);
});


const Avatar = new Schema(
    {
// description, 
    }
);

// mary here 

module.exports = {


}