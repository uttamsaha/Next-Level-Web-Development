import express, { NextFunction, Request, Response } from "express";
const app = express();

//parsers
app.use(express.json());
app.use(express.text());

//routing...
const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users/", userRouter);
app.use("/api/v1/courses/", courseRouter);

userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "user is created successfully",
    data: user,
  });
});

courseRouter.post("/create-course", (req:Request, res:Response)=>{
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "course is created successfully",
    data: course,
  });
})

app.get("/",  (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Server is running!");
});


export default app;
