const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field is required']
  },

  username:{
    type: String,
    required: [true, 'Username fieldi s required']
  }
})
