import React, { useEffect, useState } from 'react';

const FlightDelay = () => {
  const [flightStatus, setFlightStatus] = useState(null);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFlightDelay = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/flight-delay');
      if (!response.ok) {
        throw new Error('Failed to fetch flight delay data');
      }
      const data = await response.json();
      setFlightStatus(data.flightStatus);
      setNotifications(data.notifications);
      setError(null);
    } catch (err) {
      setError(err.message);
      setFlightStatus(null);
      setNotifications([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlightDelay();
    const interval = setInterval(fetchFlightDelay, 30000); // refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  if (loading) return <p>Loading flight status...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Flight-Delay Liaison</h2>
      <p>Flight Number: {flightStatus.flightNumber}</p>
      <p>Status: {flightStatus.status}</p>
      {flightStatus.status === 'Delayed' && (
        <p>Delay Duration: {flightStatus.delayMinutes} minutes</p>
      )}
      <p>Last Updated: {new Date(flightStatus.lastUpdated).toLocaleString()}</p>

      <h3>Notifications Sent</h3>
      {notifications.length === 0 ? (
        <p>No notifications sent yet.</p>
      ) : (
        <ul>
          {notifications.map((note) => (
            <li key={note.id}>
              {new Date(note.timestamp).toLocaleString()}: {note.message}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FlightDelay;
