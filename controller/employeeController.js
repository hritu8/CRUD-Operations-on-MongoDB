const Employee = require('../models/employeeModel');

// Create a new employee
exports.createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.redirect('/employees');
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all employees
exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.render('index', { employees });
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.redirect('/employees');
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
  try {
    await Employee.findByIdAndDelete(req.params.id);
    res.redirect('/employees');
  } catch (error) {
    res.status(500).send(error);
  }
};
