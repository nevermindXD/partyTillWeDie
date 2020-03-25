import http from "http";
import { app } from "./app";

const port = 3000; // default port to listen
const server = new http.Server(app);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `Server started at http://localhost:${ port }` );
    console.log("  Press CTRL-C to stop\n");
} );

