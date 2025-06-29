import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Box, Paper, FormControlLabel, Checkbox } from '@mui/material';

const RoomService = () => {
  const [food, setFood] = useState('');
  const [towels, setTowels] = useState(0);
  const [lateCheckout, setLateCheckout] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const order = { food, towels: Number(towels), lateCheckout };
    try {
      const response = await fetch('http://localhost:5000/api/room-service', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order),
      });
      if (response.ok) {
        setMessage('Order placed successfully!');
        setFood('');
        setTowels(0);
        setLateCheckout(false);
      } else {
        setMessage('Failed to place order.');
      }
    } catch (error) {
      setMessage('Error placing order.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#fff' }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333', mb: 2 }}>
          Room-Service Ranger
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Food Order"
            fullWidth
            margin="normal"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <TextField
            label="Number of Towels"
            type="number"
            fullWidth
            margin="normal"
            value={towels}
            onChange={(e) => setTowels(e.target.value)}
            inputProps={{ min: 0 }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={lateCheckout}
                onChange={(e) => setLateCheckout(e.target.checked)}
                name="lateCheckout"
              />
            }
            label="Request Late Checkout"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Place Order
          </Button>
        </Box>
        {message && (
          <Typography variant="body1" color="secondary" sx={{ mt: 2 }}>
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default RoomService;
