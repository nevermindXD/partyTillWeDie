import express from "express";
import helmet from 'helmet';
import morgan from "morgan";

import cors  from '../middlewares/cors';

export const utils = (app: any) => {
  app.use(express.urlencoded({extended: true}));
  app.use(express.json()); // To parse the incoming requests with JSON payloads
  app.use(morgan("tiny")); // Show through the console all the request at server
  app.use(cors);
  app.use(helmet());
  app.disable('x-powered-by');
  app.enable('trust proxy');
};