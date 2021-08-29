import express from 'express';

import { api } from './routes';
import errorHandler from './middlewares/error-handler';

const app = express();

app.use('/api', api);

app.use(errorHandler);

export default app;
