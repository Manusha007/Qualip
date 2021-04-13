const mongoose = require('mongoose');

const pastreportsSchema = mongoose.Schema({
  imageUrl: { type: String, required: true },
  model: { type: String, required: true },
  defection: { type: Number, required: true },
  condition: { type: Number, required: true },
  defpart: { type: String, required: true },
});

module.exports = mongoose.model('pastreports', pastreportsSchema);