import express, { Request, Response } from "express";
const app = express();

//parsers
app.use(express.json()); // express.json() use korai  client side theke json data k object e show korbe data //json data parse korbe
//parser use na korle data output ei dekhabe na
app.use(express.text()) // client side theke text data send korle parse korte parbe eta use na korle text data asbe na
app.get("/", (req: Request, res: Response) => {
  //client theke req ase r amra res pahtai // Request r Response holo builtin type
  res.send("Server is running!");
});

app.post("/", (req: Request, res: Response) => {
  //request response type
  console.log(req.body);
  // res.send("Got data");
  res.json({ // response hisebe json pathacchi
    msg: "Successfully sent data"
  })
});

export default app;
