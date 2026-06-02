import express from "express";
import { handleUpload } from "../controllers/geminiController.js"
import multer from "multer";

const router = express.Router();

const upload = multer({ 
    dest: "uploads/",
    // storage: multer.diskStorage({
    //     destination: (req, file, cb) => {
    //         cb(null, "uploads/");
    //     },
    //     filename: (req, file, cb) => {
    //         cb(null, file.originalname);
    //     },
    // }),

    // fileFilter: (req, file, cb) => {
    //     if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    //         cb(null, true);
    //     } else {
    //         cb(new Error("Invalid file type"));
    //     }
    // },

    // limits: {
    //     fileSize: 1024 * 1024 * 5,
    // },
});

router.post(
    "/upload", 
    upload.single("image"), 
    handleUpload
);

router.get(
    "/", 
    (req, res) => {
        res.send('<h1>Hello from the backend 👍 </h1>');
    }
);

export default router;