const express = require('express');
const router = express.Router();

// Simulated room service orders storage
let orders = [];

router.post('/room-service', (req, res) => {
  const { food, towels, lateCheckout } = req.body;
  if (!food && !towels && !lateCheckout) {
    return res.status(400).json({ message: 'Please provide at least one service request.' });
  }
  const order = {
    id: orders.length + 1,
    food,
    towels,
    lateCheckout,
    status: 'Received',
    timestamp: new Date(),
  };
  orders.push(order);
  res.status(201).json({ message: 'Order received', order });
});

module.exports = router;
