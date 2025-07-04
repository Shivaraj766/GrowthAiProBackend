const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const businessRoutes = require('./routes/businessRoutes');

dotenv.config();
const app = express();

// CORS configuration for frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'],
  credentials: true
}));
app.use(express.json());

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'GrowthPro Backend API is running!' });
});

// API routes
app.use('/api', businessRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
