import { Router } from 'express';
import { gptController } from '../controllers/gptController';

export const gptAnalyzeRouter = Router();
gptAnalyzeRouter.post('/', gptController.analyze);
