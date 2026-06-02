import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash"});

export const handleUpload = (req, res) => {
    console.log(req.file);
    res.send(`<h1>We're checking the file 👍 </h1>`);
};