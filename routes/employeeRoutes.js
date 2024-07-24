const express = require("express");
const router = express.Router();
// const employeeController = require('../controllers/employeeController');
const employeeController = require("../controller/employeeController");
// CRUD operations
router.post("/create", employeeController.createEmployee);
router.get("/", employeeController.getAllEmployees);
router.post("/update/:id", employeeController.updateEmployee);
router.post("/delete/:id", employeeController.deleteEmployee);

module.exports = router;
