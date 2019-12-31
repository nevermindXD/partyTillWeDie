import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import 'express-group-routes';

//import indexRouter from './routes/index';
//import API_PUBLIC from './routes/public';

//import { mongooseConnection } from './utils/connection';
import { utils } from './config/utils';
//import config from './config/db';
//const DB = process.env.MONGODB_URI || config.prod;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use(passport.initialize());
app.use(passport.session());

utils(app);

//mongooseConnection(DB);

//app.use('/', indexRouter);
//app.use('/', API_PUBLIC);

export default app;