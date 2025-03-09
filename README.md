# fastify-study

fastify-study

## fastify 기본 설정

- npm 초기화

```bash
npm init
```

- `fastify`, `fastify-plugin` 설치

```bash
npm i fastify fastify-plugin
```

- `typescript`, `@types/node` 설치

```bash
npm i -D typescript @types/node
```

- typescript 설정 파일 생성

```bash
npx tsc --init
```

- 개발용 패키지 설치

```bash
npm i -D ts-node nodemon tsx
```

- prisma 설치

```bash
npm i -D prisma
```

- prisma 초기화 (SQLite)

```bash
npx prisma init --datasource-provider sqlite
```

- prisma 마이그레이션

```bash
npx prisma migrate dev --name init
```

- dotenv 설치

```bash
npm i dotenv
npm i -D @types/dotenv
```

- websocket 설치

```bash
npm i @fastify/websocket
npm i -D @types/ws
```

- typebox 설치

```bash
npm i @sinclair/typebox @fastify/type-provider-typebox
```

```bash
npm i bcrypt jsonwebtoken
npm i -D @types/bcrypt @types/jsonwebtoken
```
