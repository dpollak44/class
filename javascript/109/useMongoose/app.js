const mongoose = require('mongoose');
const Contact = require('./Contact');
const ContactList = require('./ContactList');

async function connectToMongo() {
  mongoose.connect('mongodb://localhost:27017/contacts', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', err => console.error('connection error:', err));
  db.once('open', function () {
    console.log('connected');
  });

  const contact = new Contact({
    name: {
      first: 'Donald',
      last: 'Trump'
    },
    email: 'dtrump@whitehouse.gov',
    phone: '123456789'
  });

  contact.save();

  const list1 = new ContactList({
    name: 'List #1'
  });
  const list2 = new ContactList({
    name: 'List #2'
  });

  list1.contacts.push(contact);
  list2.contacts.push(contact);

  list1.print();
  list2.print();

  await list1.save();
  await list2.save();

  const loadedList = await ContactList.findOne();
  loadedList.print();

  ContactList.find().populate('contacts').exec((err, lists) => {
    lists.forEach(l => l.print());
  });
}

connectToMongo().catch(e => console.error(e));