import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Serve static files from the React build
app.use(express.static(path.join(__dirname, 'client/dist')));

// API route to get QR code configuration
app.get('/api/qr-config', (req, res) => {
  res.json({
    amount: '50',
    message: 'Thank you for your support! 🎉',
    qrValue: 'upi://pay?pa=yourname@bank&pn=YourName&am=50&tn=Gift&tr=123456'
  });
});

// Fallback to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`🎁 Gift Wrap QR Code app running on http://localhost:${PORT}`);
});
