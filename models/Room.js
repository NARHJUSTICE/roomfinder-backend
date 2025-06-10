const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: Number,
  image: String,
  type: {
    type: String,
    enum: ['single', 'shared'],
    default: 'single',
  },
  capacity: {
    type: Number,
    default: 1,
  },
  description: String,
  available: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { timestamps: true });

module.exports = mongoose.model('Room', roomSchema);
