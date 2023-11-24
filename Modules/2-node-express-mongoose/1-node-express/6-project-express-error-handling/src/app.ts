import express, { NextFunction, Request, Response } from "express";
const app = express();

//parsers
app.use(express.json());
app.use(express.text());


//Error handling using trycatch block
//kono error hole seta server k crash kore na borong error e giye error dekhabe trycatch block user korai
app.get("/", async (req: Request, res: Response) => {
  try {
    console.log(req.query);
    res.send("Server is running!");
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "failed to get data",
    });
  }
});


//global error handling
app.get("/test", async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.query);
    res.send(something);
  } catch (error) {
    next(error);
  }
});


//kono route exist na korle sekhane msg dekhabo route not found eta ekdom niche korte hoi
app.all("*",(req:Request, res:Response)=>{
  res.status(400).json({
    success: false,
    message: "No route found"
  })
})
//global error handler --> sob error k common jaigai niye ashar jonno
app.use((error : any, req : Request, res:Response, next:NextFunction)=>{
  console.log(error);
  if(error){
    res.status(400).json({
      success: false,
      message: "something went wrong"
    })
  }
})
export default app;
