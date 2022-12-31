import express from "express";
import multer from "multer";
import {
  allPortfolio,
  createPortfolio,
  deletePortfolio,
  editPortfolio,
  sendMail,
  singlePortfolio,
} from "../controllers/portfolio.js";
import path, { resolve } from "path";

const router = express.Router();
const __dirname = resolve();

// product photo upload
const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "_" + file.originalname);
  },
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "api/public/images/portfolio/"));
  },
});

const productMulter = multer({
  storage,
}).single("image");

router.post("/mail", sendMail);
router.post("/", productMulter, createPortfolio);
router.get("/", allPortfolio);
router
  .route("/:id")
  .get(singlePortfolio)
  .delete(deletePortfolio)
  .put(editPortfolio)
  .patch(editPortfolio);
export default router;
