const express = require('express');
const router = express.Router();


// Updated local events data with Indian locations
const events = [
  {
    id: 1,
    name: 'Classical Music Evening at NCPA',
    description: 'Enjoy a night of classical Indian music performances.',
    location: 'National Centre for the Performing Arts, Mumbai',
    date: '2024-07-12',
  },
  {
    id: 2,
    name: 'Mumbai Food Festival',
    description: 'Taste the best street food and gourmet dishes from Mumbai.',
    location: 'Jio Garden, Mumbai',
    date: '2024-07-15',
  },
];

// Endpoint to get local events
router.get('/event-concierge/events', (req, res) => {
  res.json({ events });
});

module.exports = router;
