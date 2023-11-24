import { Server } from "http";
import app from "./app";
const port = 7000;

let server: Server; //server ta Server type Server type ta http module theke asteche

async function bootstrap() {
   server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
bootstrap(); 