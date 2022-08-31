# Words Activity

In English language, words can be categorized according to their syntactic functions, which is known as "Part of Speech".
Examples of part of speech: (noun, verb, adjective, ...)

## Usage Instructions

In this activity, you will be prompted with a multiple-choice question to select. the correct answer.
If you choose the correct answer, the choice button colour will change. green, otherwise it will turn red.

At the end of the activity, you will be redirected to the rank page to see your rank against your peers.

## Libraries/Packages used

### Backend

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Jasmine](https://jasmine.github.io/)
- [Supertest](https://www.npmjs.com/package/supertest)
- [Express-validator](https://express-validator.github.io/)
- [http-status-codes](https://www.npmjs.com/package/http-status-code)
- [morgan](https://www.npmjs.com/package/morgan)
- [helmet](https://www.npmjs.com/package/helmet)
- [dotenv](https://www.npmjs.com/package/dotenv)

### Frontend

- [React.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Material-UI](https://mui.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

## run Instructions

### Backend

- from root directory change directory to words-backend
  ```sh
  cd words-backend
  ```
- Install NPM packages
  ```sh
  npm install
  ```
- Starting the development environment
  ```sh
  npm run dev
  ```
- Starting the production environment
  ```sh
  npm start
  ```

### Frontend

- from root directory change directory to words-frontend
  ```sh
  cd words-frontend
  ```
- Install NPM packages
  ```sh
  npm install
  ```
- Starting the development environment
  ```sh
  npm start
  ```
- Running unit tests
  ```sh
  npm run test
  ```

# API Requirements

## API Endpoints `/api/v1`

#### HealthCheck

- `GET /ping`
  - Responed with `pong` as a mark of good health

#### Words

- `GET /words`
  - Responed with a list of 10 objects selected randomly from the "wordsList".
    The array should include at least 1 adjective, 1 adverb, 1 noun, and 1 verb.

#### Rank

- `POST /rank`
  - takes the final score in the request body, and responds back with the rank%
    rounded to the nearest hundredth.
