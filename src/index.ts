import dotenv from "dotenv";
import express from "express";
import cookieParser from 'cookie-parser';
//import passport from 'passport';

//import indexRouter from './routes/index';
//import API_PUBLIC from './routes/public';


// initialize configuration
dotenv.config();

const app = express();
const port = 3000; // default port to listen

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// define a route handler for the default home page
app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );

// start the Express server
app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
