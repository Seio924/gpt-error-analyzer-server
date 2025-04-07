import { RequestHandler } from 'express';
import { createGptPrompt } from '../services/createGptPrompt';
import { gptService } from '../services/gptService';

export const gptController: {
  analyze: RequestHandler;
} = {
  analyze: async (req, res): Promise<void> => {
    const { message, stack, timestamp } = req.body;

    if (!message) {
      res.status(400).json({ error: 'message는 필수입니다.' });
      return;
    }

    const prompt = createGptPrompt({ message, stack, timestamp });

    try {
      const summary = await gptService.analyze(prompt);
      res.json({ summary });
    } catch (err) {
      console.error('GPT 호출 실패:', err);
      res.status(500).json({ error: 'GPT 분석 중 오류가 발생했습니다.' });
    }
  },
};
