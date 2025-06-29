import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import RoomService from './components/RoomService';
import FlightDelay from './components/FlightDelay';
import LocalExplorer from './components/LocalExplorer';
import EventConcierge from './components/EventConcierge';
import { AppBar, Toolbar, Typography, Tabs, Tab, Box, CssBaseline } from '@mui/material';

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

function App() {
  const location = useLocation();
  const currentTab = () => {
    switch (location.pathname) {
      case '/':
        return 0;
      case '/flight-delay':
        return 1;
      case '/local-explorer':
        return 2;
      case '/event-concierge':
        return 3;
      default:
        return false;
    }
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f5f5f7', minHeight: '100vh' }}>
      <CssBaseline />
      <AppBar position="static" color="primary" sx={{ backgroundColor: '#003366' }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 'bold', letterSpacing: 1, color: '#ffd700' }}>
            Arnav's Hospitality Travel Assistant
          </Typography>
          <Tabs value={currentTab()} textColor="inherit" indicatorColor="secondary">
            <LinkTab label="Room-Service Ranger" to="/" />
            <LinkTab label="Flight-Delay Liaison" to="/flight-delay" />
            <LinkTab label="Local Explorer" to="/local-explorer" />
            <LinkTab label="Event Concierge" to="/event-concierge" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3, maxWidth: 900, margin: 'auto', backgroundColor: '#ffffff', borderRadius: 2, boxShadow: 3 }}>
        <Routes>
          <Route path="/" element={<RoomService />} />
          <Route path="/flight-delay" element={<FlightDelay />} />
          <Route path="/local-explorer" element={<LocalExplorer />} />
          <Route path="/event-concierge" element={<EventConcierge />} />
        </Routes>
      </Box>
      <Box component="footer" sx={{ mt: 4, py: 2, textAlign: 'center', color: '#666' }}>
        © 2025 Arnav's Hospitality Travel Assistant.
      </Box>
    </Box>
  );
}

export default App;
