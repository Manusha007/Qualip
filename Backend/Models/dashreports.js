const mongoose = require('mongoose');

const dashReportsSchema = mongoose.Schema({
  title: { type: String, required: true },
  count: { type: Number, required: true },
});

module.exports = mongoose.model('dashreports', dashReportsSchema);