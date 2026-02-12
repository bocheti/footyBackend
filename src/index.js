import 'dotenv/config';
import mongoose from 'mongoose';
import app from './app.js';

// env vars
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// connect DB + start server\

mongoose.connect(MONGODB_URI).then(() => {
    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

// app.listen(PORT, () => {
//   console.log(`Backend is running on http://localhost:${PORT}`);
// });
