# fastify-study

- [fastify-study](#fastify-study)
  - [fastify 기본 설정](#fastify-기본-설정)
  - [fastify API 구현 가이드](#fastify-api-구현-가이드)
    - [Schema 정의](#schema-정의)
    - [Route 구현](#route-구현)
  - [Jest 가이드](#jest-가이드)

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

- swagger 설치

```bash
npm i @fastify/cors @fastify/swagger @fastify/swagger-ui
```

- jest, supertest 설치

```bash
npm i -D jest ts-jest supertest @types/jest @types/supertest
npx ts-jest config:init;
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

## Jest 가이드

1. jest 설정파일 추가

```bash
npx ts-jest config:init;
```

2. package.json에 실행 명령어 추가

```json
  "scripts": {
    "build": "tsc -w --project tsconfig.json && npx -p tsconfig.json",
    "start": "npm run dev",
    "dev": "npx tsx src/main.ts",
    "dev:live": "nodemon --watch 'src/' --exec node --loader ts-node/esm src/main.ts --verbose",
    "test": "jest"  // here
  },
```

3. `test` 폴더에 테스트 추가

> 테스트 파일 이름은 xxx`.test.ts` 혹은 xxx`.spec.ts` 로 지정해야합니다.

1.
