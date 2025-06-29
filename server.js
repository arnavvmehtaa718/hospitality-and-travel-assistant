require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

// Import routes
const roomServiceRoutes = require('./routes/roomService');
const flightDelayRoutes = require('./routes/flightDelay');
const localExplorerRoutes = require('./routes/localExplorer');
const eventConciergeRoutes = require('./routes/eventConcierge');

// Routes
app.use('/api', roomServiceRoutes);
app.use('/api', flightDelayRoutes);
app.use('/api', localExplorerRoutes);
app.use('/api', eventConciergeRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('Hospitality & Travel Assistant Backend is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
