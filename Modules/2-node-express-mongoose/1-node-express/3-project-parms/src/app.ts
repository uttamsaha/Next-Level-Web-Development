import express, { Request, Response } from "express";
const app = express();

//parsers
app.use(express.json()); 
app.use(express.text())
// app.get("/:userId", (req: Request, res: Response) => { // ekhane userId hocce params params k recv korte :/userId diye rcv kortsi
//   console.log(req.params); //req.params.userId diye value ta k access korte pari
//   res.send("Server is running!");
// });
app.get("/:userId/:subId", (req: Request, res: Response) => { // ekhane userId hocce params params k recv korte :/userId diye rcv kortsi
  console.log(req.params); //req.params.userId diye value ta k access korte pari
  res.send("Server is running!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    msg: "Successfully sent data"
  })
});

export default app;
