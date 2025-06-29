const express = require('express');
const router = express.Router();

// Updated personalized tips data with Indian locations
const tips = [
  {
    id: 1,
    type: 'Dining',
    description: 'Experience authentic Maharashtrian cuisine at The Table, Mumbai.',
    location: 'The Table, Mumbai',
    mapLink: 'https://maps.google.com/?q=The+Table,+Mumbai',
  },
  {
    id: 2,
    type: 'Sightseeing',
    description: 'Visit the iconic Taj Mahal Palace Hotel and Gateway of India.',
    location: 'Taj Mahal Palace Hotel, Mumbai',
    mapLink: 'https://maps.google.com/?q=Taj+Mahal+Palace+Hotel,+Mumbai',
  },
  {
    id: 3,
    type: 'Dining',
    description: 'Enjoy street food delicacies at Juhu Beach.',
    location: 'Juhu Beach, Mumbai',
    mapLink: 'https://maps.google.com/?q=Juhu+Beach,+Mumbai',
  },
];

// Endpoint to get personalized tips
router.get('/local-explorer/tips', (req, res) => {
  res.json({ tips });
});

module.exports = router;
