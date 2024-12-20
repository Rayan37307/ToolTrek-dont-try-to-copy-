import express from "express";
import cors from "cors";
import routerRegister from "./routes/registerRoute.js";
import mongoose from "mongoose";
import routerLogin from "./routes/loginRoute.js";

import dotenv from 'dotenv';
import productRouter from "./routes/productRoute.js";
dotenv.config();

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected..."))
    .catch((err) => console.log(err));

const PORT = process.env.PORT || 3117

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/users', routerRegister)
app.use('/api/v1/users', routerLogin)
app.use('/api/v1/products', productRouter)



app.get("/", (req, res) => {
    res.json({ message: "Hello, World!" });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});