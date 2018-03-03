import express from 'express';
import path from 'path';

import gamesRouter from './routers/games';
import mountWebpackMiddleware from './environments/webpackMiddleware';
import mountMorganMiddleare from './environments/morganMiddleware';

const server = express();
const assets = path.join(__dirname, '../client/');

mountWebpackMiddleware(server);
mountMorganMiddleare(server);
server.use('/games', gamesRouter);
server.use(express.static(assets));

export default server;
