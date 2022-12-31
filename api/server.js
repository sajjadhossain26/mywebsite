import express from "express";
import dotenv from "dotenv";
import mongoDB from "./config/db.js";
import colors from "colors";
import router from "./routes/portfolio.js";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler.js";

// express init
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8080;

// Router setup
app.use("/api/me", router);
app.use(errorHandler);

// static folder
app.use(express.static("api/public"));
app.listen(PORT, () => {
  mongoDB();
  console.log(`Server is running on port ${PORT}`.bgMagenta.white);
});
