import {} from 'dotenv/config';
import morgan from 'morgan';

const mountMorganMiddleware = (server) => {
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'test') {
    server.use(morgan('tiny'));
  }
};

export default mountMorganMiddleware;
