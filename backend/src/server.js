import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import mongoose from 'mongoose';
import { setServers } from 'node:dns';

const app = express();
const port = Number(process.env.PORT) || 3001;
const dnsServers = (process.env.DNS_SERVERS || '1.1.1.1,8.8.8.8').split(',').map((server) => server.trim()).filter(Boolean);
setServers(dnsServers);
const allowedOrigins = (process.env.FRONTEND_ORIGIN || 'http://localhost:5173').split(',').map((origin) => origin.trim());

app.use(helmet());
app.use(cors({ origin: allowedOrigins }));
app.use(express.json({ limit: '10kb' }));

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true, maxlength: 100 },
  email: { type: String, required: true, trim: true, lowercase: true, maxlength: 254 },
  service: { type: String, required: true, trim: true, maxlength: 100 },
  message: { type: String, required: true, trim: true, maxlength: 5000 },
}, { timestamps: true });
const Contact = mongoose.model('Contact', contactSchema);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, service, message } = req.body ?? {};
  if (![name, email, service, message].every((value) => typeof value === 'string' && value.trim())) {
    return res.status(400).json({ error: 'Please provide your name, email, service, and message.' });
  }
  if (name.trim().length > 100 || email.trim().length > 254 || service.trim().length > 100 || message.trim().length > 5000) {
    return res.status(400).json({ error: 'One or more fields exceed the allowed length.' });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return res.status(400).json({ error: 'Please provide a valid email address.' });
  }
  try {
    await Contact.create({ name, email, service, message });
    return res.status(201).json({ message: 'Your message has been received.' });
  } catch (error) {
    console.error('Contact submission failed:', error);
    return res.status(500).json({ error: 'We could not save your message. Please try again.' });
  }
});

app.use((error, _req, res, _next) => {
  if (error instanceof SyntaxError && 'body' in error) return res.status(400).json({ error: 'Please send valid JSON.' });
  console.error('Request failed:', error);
  return res.status(500).json({ error: 'An unexpected server error occurred.' });
});

if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is required. Copy .env.example to .env and add your Atlas connection string.');
  process.exit(1);
}
try {
  console.log(`Using DNS resolvers: ${dnsServers.join(', ')}`);
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB Atlas.');
  app.listen(port, () => console.log(`Contact API listening on port ${port}.`));
} catch (error) {
  console.error('Could not connect to MongoDB Atlas:', error);
  process.exit(1);
}
