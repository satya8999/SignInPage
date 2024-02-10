
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name:String,
    age:Number,
    contact:String,
    email:String,
    date:String,
    password:String
});

const ContactModel = mongoose.model("contacts",contactSchema);

module.exports = ContactModel;