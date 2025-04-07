import OpenAI from 'openai';

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  throw new Error('OPENAI_API_KEY가 설정되지 않았습니다.');
}

const openai = new OpenAI({ apiKey });

export const gptService = {
  async analyze(prompt: string): Promise<string> {
    const chat = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: '당신은 자바스크립트 디버깅 전문가입니다.' },
        { role: 'user', content: prompt },
      ],
      temperature: 0.4,
    });

    return chat.choices[0].message.content ?? 'GPT 응답이 없습니다.';
  },
};
