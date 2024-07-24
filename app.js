const express = require('express');
const app = express();
const mongoose = require('mongoose');
const employeeRoutes = require('./routes/employeeRoutes');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/myDatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/employees', employeeRoutes);

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
