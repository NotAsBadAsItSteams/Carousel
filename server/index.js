import {} from 'dotenv/config';

import server from './server';

const port = process.env.PORT || 8080;

server.listen(port, () => console.log(`app server is listening on ${port}`)); // eslint-disable-line no-console
