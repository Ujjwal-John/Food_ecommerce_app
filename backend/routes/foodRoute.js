import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer";
import path from "path";


const foodRouter = express.Router();

// Image Storage Engine
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads"); // Ensure the uploads folder exists
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

// Initialize Multer middleware
const upload = multer({storage});

// Define the route for adding food
foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)
export default foodRouter;
