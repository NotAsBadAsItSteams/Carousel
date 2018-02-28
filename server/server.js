import {} from 'dotenv';
import express from 'express';

import gamesRouter from './routers/games';

const server = express();

server.use('/games', gamesRouter);

export default server;
