import express from "express";
import dotenv from "dotenv";
import connectToDatabase from "./database/connection.js";
import carBrandRoutes from "./delivery/routes/carBrandRoutes.js";
import orderRoutes from "./delivery/routes/orderRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
const port = process.env.PORT || 4000;

//добавить usecase фильтр на отображение только статуса по id

app.use("/cars", carBrandRoutes);
app.use("/orders", orderRoutes);

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server is listening on port ${port}`);
});
