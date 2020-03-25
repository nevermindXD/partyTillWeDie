import bodyParser from 'body-parser';
import helmet from 'helmet';

import cors  from '../middleware/cors';

export const utils = (app: any) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors);
  app.use(helmet());
  app.disable('x-powered-by');
  app.enable('trust proxy');
};