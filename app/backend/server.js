const express = require('express');
const cors = require('cors');
const path = require('path');
const generateVideoRouter = require('./generateVideo');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Serve media files
app.use('/media', express.static(path.join(__dirname, '../../media')));

// API Routes
app.use('/api', generateVideoRouter);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        service: 'SustainAds AI',
        timestamp: new Date().toISOString()
    });
});

// Root endpoint
// TODO: Add rate limiting in production (e.g., using express-rate-limit)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: err.message 
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 SustainAds AI server running on http://localhost:${PORT}`);
    console.log(`📁 Serving frontend from: ${path.join(__dirname, '../frontend')}`);
});

module.exports = app;
