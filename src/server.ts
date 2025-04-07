import { createApp } from './app';

const port = process.env.PORT || 4000;
const app = createApp();

app.listen(port, () => {
  console.log(`✅ GPT 분석 서버 실행 중: http://localhost:${port}`);
});
