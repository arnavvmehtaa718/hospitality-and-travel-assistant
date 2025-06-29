import React, { useEffect, useState } from 'react';

const LocalExplorer = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTips = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/local-explorer/tips');
      if (!response.ok) {
        throw new Error('Failed to fetch tips');
      }
      const data = await response.json();
      setTips(data.tips);
      setError(null);
    } catch (err) {
      setError(err.message);
      setTips([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTips();
  }, []);

  if (loading) return <p>Loading personalized tips...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Local Explorer</h2>
      <ul>
        {tips.map((tip) => (
          <li key={tip.id}>
            <strong>{tip.type}:</strong> {tip.description} <br />
            Location: {tip.location} <br />
            <a href={tip.mapLink} target="_blank" rel="noopener noreferrer">View on Map</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocalExplorer;
