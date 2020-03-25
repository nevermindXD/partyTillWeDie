import express, { Request, Response, NextFunction } from "express";
import expressValidator from "express-validator";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

require("dotenv").config();

import config from './utils/db';
import { mongooseConnection } from "./utils/connection";

// Routes
// import initializeRoutes from "./routes/initializeRoutes";

const DB = process.env.MONGODB_URI || config.prod;

export const app = express();
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(morgan("tiny")); // Show through the console all the request at server

app.disable("x-powered-by");

app.use(
    cors({
        credentials: true,
        origin: true
    })
);

// initializeRoutes(app);

mongooseConnection(DB);

app.get("/*", (req: Request, res: Response) => {
    res.status(401).send("ACCESS DENIED");
});

export default app;
