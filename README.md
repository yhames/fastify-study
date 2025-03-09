# fastify-study

- [fastify-study](#fastify-study)
  - [fastify 기본 설정](#fastify-기본-설정)
  - [fastify API 구현 가이드](#fastify-api-구현-가이드)
    - [Schema 정의](#schema-정의)
    - [Route 구현](#route-구현)

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
npm i bcrypt jsonwebtoken @fastify/cookie
npm i -D @types/bcrypt @types/jsonwebtoken
```

## fastify API 구현 가이드

### Schema 정의

1. typebox 타입을 정의한다.
2. typebox 타입을 사용하여 schema를 작성한다.
3. typebox 타입을 사용하여 type을 생성한다.

### Route 구현

1. route를 작성합니다.
2. service 로직을 작성합니다.
3. 필요한 경우, repository에 필요한 함수를 구현합니다.
4. 필요한 경우, utils에 helper 함수를 작성합니다.
