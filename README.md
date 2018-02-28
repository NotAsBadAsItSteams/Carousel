# carousel
[![CircleCI](https://circleci.com/gh/NotAsBadAsItSteams/carousel/tree/master.svg?style=shield)](https://circleci.com/gh/NotAsBadAsItSteams/carousel/tree/master) [![Coverage Status](https://coveralls.io/repos/github/NotAsBadAsItSteams/Carousel/badge.svg?branch=feat%2Fcoveralls)](https://coveralls.io/github/NotAsBadAsItSteams/Carousel?branch=feat%2Fcoveralls)

## Usage

### Dependencies
- node + npm (`brew install node`)

### Installation 
1. Ensure `node` and `npm` are installed
2. Install project dependencies via npm (`npm install`)
3. Make a copy of `example.env` and rename to `.env`
4. Fill in missing information in `.env`
5. `npm run start:dev` to start developement server

### Usage

#### Development
- set `NODE_ENV` to 'development'
- `npm run start:dev` to start server in development mode

#### Production
- set `NODE_ENV` to 'production'
- `npm start` to compile and start server in production mode