import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/configdb.js';
import usersRoutes from './router/usersrouter.js';
import locationRoutes from './router/locationrouter.js';
import attendenceRoutes from './router/attendencerouter.js';
import bodyParser from 'body-parser';
import cors from "cors";
import path from 'path';


dotenv.config();
//connecting to mongodb database
connectDb();
const app = express();
//middleware bodyparser
app.use(express.json());
app.use(bodyParser.json())
app.use(cors())

//read image in frontend 
app.use(express.json())
const __dirname = path.resolve();
app.use(express.static(__dirname))

//dotenv config
app.get("/", (req, res) => {
  res.send("<h1>Welcome to Node Server</h1>");
});


app.use("/user", usersRoutes);
app.use("/location", locationRoutes);
app.use("/attendence", attendenceRoutes)

const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${process.env.PORT}`
      
  );
});
