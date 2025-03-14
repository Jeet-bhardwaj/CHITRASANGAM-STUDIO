import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Get directory name in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Determine the build directory - one level up and then into dist
const distPath = path.join(__dirname, '..', 'dist');

// Initialize express app
const app = express();
const PORT = process.env.PORT || 3000;

// Check if dist directory exists
if (!fs.existsSync(distPath)) {
  console.error('Error: Build directory (dist) not found!');
  console.error('Make sure to run "npm run build" before starting the server');
  process.exit(1);
}

// Serve static files from the dist directory
app.use(express.static(distPath));

// Log requests in production
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
  next();
});

// All other routes should return the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
  console.log(`💼 Serving static files from: ${distPath}`);
  console.log(`🔄 For all other routes, serving: ${path.join(distPath, 'index.html')}`);
});
