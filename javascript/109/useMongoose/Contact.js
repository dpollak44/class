const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true }
  },
  email: String,
  phone: String
});

module.exports = mongoose.model('Contact', contactSchema);