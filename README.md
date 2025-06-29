# Arnav's Hospitality Travel Assistant

## Project Overview

This is a full-stack web application designed for the hospitality and travel industry. It includes the following features:

1. **Room-Service Ranger**: Allows hotel guests to order food, request extra towels, or late checkout through a simple web interface.
2. **Flight-Delay Liaison**: Monitors flight delays and sends notifications to travelers.
3. **Local Explorer**: Provides personalized dining and sightseeing tips synced with maps and calendar.
4. **Event Concierge**: Suggests local events and hotel activities based on guest preferences.

The frontend is built with React, and the backend uses Node.js with Express and MongoDB for data storage.

## Setup Instructions

### Backend

1. Navigate to the backend directory:
   ```
   cd hospitality-travel-assistant/backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with your MongoDB connection string:
   ```
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the backend server:
   ```
   npm start
   ```
   The server will run on port 5000 by default.

### Frontend

1. Navigate to the frontend directory:
   ```
   cd hospitality-travel-assistant/frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the React development server:
   ```
   npm start
   ```
4. Open your browser and go to:
   ```
   http://localhost:3000
   ```

## Demo Video

[Insert demo video link here]

## Deployment

The app can be deployed on platforms like Vercel (frontend) and Heroku (backend).

## Notes

- The Room-Service Ranger feature is fully implemented and tested.
- Flight-Delay Liaison, Local Explorer, and Event Concierge features are implemented with basic functionality and require further testing and enhancements.
- Omnidimension chatbot integration is included for conversational assistance.

## Contact

For any questions or support, please contact Arnav at [Your Email].
