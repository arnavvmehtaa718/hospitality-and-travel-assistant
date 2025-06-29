const express = require('express');
const router = express.Router();

// Simulated flight delay data
let flightStatus = {
  flightNumber: 'AB123',
  status: 'On Time',
  delayMinutes: 0,
  lastUpdated: new Date(),
};

// Simulated notification log
let notifications = [];

router.get('/flight-delay', (req, res) => {
  // Simulate a random delay update
  const delayChance = Math.random();
  if (delayChance > 0.7) {
    flightStatus.status = 'Delayed';
    flightStatus.delayMinutes = Math.floor(Math.random() * 120) + 10; // 10 to 130 minutes delay
    flightStatus.lastUpdated = new Date();

    // Simulate sending notification
    notifications.push({
      id: notifications.length + 1,
      flightNumber: flightStatus.flightNumber,
      message: `Flight ${flightStatus.flightNumber} delayed by ${flightStatus.delayMinutes} minutes.`,
      timestamp: new Date(),
    });
  } else {
    flightStatus.status = 'On Time';
    flightStatus.delayMinutes = 0;
    flightStatus.lastUpdated = new Date();
  }

  res.json({
    flightStatus,
    notifications,
  });
});

module.exports = router;
