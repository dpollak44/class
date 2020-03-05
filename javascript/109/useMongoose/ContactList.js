const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactListSchema = new Schema({
  name: { type: String, required: true },
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Contact' }]
});

contactListSchema.methods.print = function () {
  console.log(this.name);
  this.contacts.forEach(c => {
    console.log(c);
  });
};

module.exports = mongoose.model('ContactList', contactListSchema);