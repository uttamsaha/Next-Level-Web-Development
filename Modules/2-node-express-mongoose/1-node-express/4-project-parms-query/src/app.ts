import express, { NextFunction, Request, Response } from "express";
const app = express();

//parsers
app.use(express.json()); 
app.use(express.text())

//middleware + query
const logger = (req: Request, res:Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next(); //prottek ta middleware er ses e next function call dite hoi nahole stuck hoie jabe sei middlware e
  //multiple middleware use kora jai. middleware besir vag smy authentication purpose e use hoi
}


//query example
//localhost:7000?email=uttam@gmail.com&phone=01400024412
app.get("/", logger, (req: Request, res: Response) => { // controller(req, res ) e jawar age logger middleware e jabe req ta
  console.log(req.query); //req.query.email diye email er value access kora jabe ba destructuring korte pari
  res.send("Server is running!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    msg: "Successfully sent data"
  })
});

export default app;
