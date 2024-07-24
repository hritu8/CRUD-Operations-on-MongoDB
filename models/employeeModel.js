const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  position: String,
  department: String
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
