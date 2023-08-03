import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

const app: Express = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req:Request, res:Response)=>{
  res.send("<h1>마인드마인드 서버</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`server is running on ${process.env.PORT}`);
});