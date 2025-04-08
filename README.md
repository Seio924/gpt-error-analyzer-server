# gpt-error-analyzer-server

OpenAI GPT를 활용해 자바스크립트 에러 로그를 분석하고, 에러의 원인 및 해결 방법을 요약해주는 백엔드 API 서버입니다.

프론트엔드에서 발생한 콘솔 에러를 수집해 GPT에게 전송하고 요약된 분석 결과를 반환합니다.

<br/>

## 📦 주요 기능

- GPT-3.5 기반 자바스크립트 에러 요약
- 에러 메시지 + 스택 트레이스 기반 분석
- 프론트 유틸(gpt-error-analyzer)과 연동

<br/>

## ⚙️ 요구사항

- Node.js 16 이상
- OpenAI API Key

<br/>

## 🛠 개발 환경 실행

1. 레포 클론

```bash
git clone https://github.com/Seio924/gpt-error-analyzer-server.git
cd gpt-error-analyzer-server
```

2. 의존성 설치

```bash
npm install
```

3. 환경변수 등록 (`.env` 또는 export)

```env
OPENAI_API_KEY=sk-xxxx...
```

4. 개발 모드 실행

```bash
npx ts-node src/server.ts
```

<br/>

## 🔨 빌드 & 실행

```bash
npm run build
node dist/server.js
```

> 빌드 결과는 `dist/` 폴더에 생성됩니다.

<br/>

## 🚀 실행만 하고 싶다면?

> 빌드된 실행 전용 서버를 사용하세요!

🔗 [gpt-error-analyzer-server-runtime](https://github.com/Seio924/gpt-error-analyzer-server-runtime)

```bash
git clone https://github.com/Seio924/gpt-error-analyzer-server-runtime.git
npm install
npm start
```

<br/>

## 📝 License

MIT © 2025 [Seio924](https://github.com/Seio924)
