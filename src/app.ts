import express from 'express';
import cors from 'cors';
import { gptAnalyzeRouter } from './routes/gptAnalyzeRouter';

export function createApp() {
  const app = express();
  app.use(
    cors({
      origin: true,
      credentials: false,
      methods: ['POST'],
      allowedHeaders: ['Content-Type'],
    })
  );
  app.use(express.json());
  app.use('/gpt-analyze', gptAnalyzeRouter);
  return app;
}
