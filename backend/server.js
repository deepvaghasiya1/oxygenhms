const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get('/api/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    message: 'OxygenHMS API is running',
    timestamp: new Date().toISOString()
  });
});

// Welcome route
app.get('/api', (req, res) => {
  res.status(200).json({
    name: 'OxygenHMS API',
    version: '1.0.0',
    description: 'Hospital Management System API',
    endpoints: {
      health: '/api/health',
      auth: '/api/auth',
      admin: '/api/admin',
      doctor: '/api/doctor',
      nurse: '/api/nurse',
      receptionist: '/api/receptionist',
      lab: '/api/lab',
      pharmacy: '/api/pharmacy',
      billing: '/api/billing',
      radiology: '/api/radiology',
      ot: '/api/ot',
      emergency: '/api/emergency',
      hr: '/api/hr',
      inventory: '/api/inventory',
      patient: '/api/patient'
    }
  });
});

// Routes (to be implemented)
// TODO: Add route files as development progresses

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource was not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`OxygenHMS API Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api`);
});

module.exports = app;
