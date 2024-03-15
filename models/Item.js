const mongoose = require('mongoose');


const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: false,
  },
  quantity: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  storageTemperature: {
    type: String,
    required: false,
  },
  damage: {
    type: String,
    required: false,
  },
  originLocation: {
    type: String,
    required: true,
  },
  manufacturedDate: {
    type: Date,
    required: true,
  },
  checkpoints: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'checkpoint',
    },
  ], 
  qrCode: {
    type: String,
   
  },
});

const ItemModel = mongoose.model('item', ItemSchema);

module.exports = ItemModel;
