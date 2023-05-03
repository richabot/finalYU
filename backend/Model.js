const mongoose = require('mongoose');

const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],
  },
  mobile: {
    type: String,
    required: true,
  },
  emergencyContactNumber: {
    type: String,
    required: true,
  },
  govtIdType: {
    type: String,
    required: true,
  },
  govtId: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const FormModel = mongoose.model('Form', FormSchema);

module.exports = FormModel;
