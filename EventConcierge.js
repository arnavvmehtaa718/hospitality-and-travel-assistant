import React, { useEffect, useState } from 'react';

const EventConcierge = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/event-concierge/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      const data = await response.json();
      setEvents(data.events);
      setError(null);
    } catch (err) {
      setError(err.message);
      setEvents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) return <p>Loading local events...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Event Concierge</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <strong>{event.name}</strong> <br />
            {event.description} <br />
            Location: {event.location} <br />
            Date: {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventConcierge;
