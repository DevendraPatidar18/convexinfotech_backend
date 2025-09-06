import express from 'express';
import dotenv from 'dotenv';
import database from './db/database.js';
import cookies from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors({
  origin: 'process.env.CORS_ORIGIN', // replace with your client's origin
  credentials: true, // allow cookies to be sent
}));

app.use(express.json({ limit: '32kb' })); // to handle large payloads
app.use(express.urlencoded({ extended: true, limit: '32kb' }));
app.use(express.static('public'));
app.use(cookies());


export default app;