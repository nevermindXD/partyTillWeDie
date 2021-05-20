import express, { Request, Response } from "express";
// import cors from "cors";

import config from './utils/db';
import { mongooseConnection } from "./utils/connection";

require("dotenv").config();
// Routes
// import initializeRoutes from "./routes/initializeRoutes";

const DB = process.env.MONGODB_URI || config.dev;

const app = express();

// app.use(
//     cors({
//         credentials: true,
//         origin: true
//     })
// );

// initializeRoutes(app);

mongooseConnection(DB);

app.get("/*", (req: Request, res: Response) => {
    res.status(401).send("ACCESS DENIED");
});

export default app;
