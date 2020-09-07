const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  //username: { type: String, required: true },
  //description: { type: String, required: true },
  //duration: { type: Number, required: true },
  //date: { type: Date, required: true },
  namahotel: { type: String},
  klaster: { type: String},
  rating: { type: String},
  alamathotel: { type: String},
  phone: { type: String},
  
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;