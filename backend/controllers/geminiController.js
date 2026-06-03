import fs from "fs";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

export const handleUpload = async (req, res) => {
    try {
        console.time('read-file');
        const imageBuffer = fs.readFileSync(req.file.path);
        console.log(`Size: ${req.file.size} bytes`);
        console.timeEnd('read-file');

        console.log(imageBuffer);
        console.time('base64');
        const imageBase64 = imageBuffer.toString("base64");
        console.timeEnd('base64');

        console.log(req.file.mimetype);

        console.log(imageBase64.slice(0, 50));

        console.time("gemini");
        const result = await model.generateContent([
            {
                inlineData: {
                    data: imageBase64,
                    mimeType: req.file.mimetype,
                }
            },
            "Describe this image in one sentence"
        ]);
        console.timeEnd("gemini");

        const text = result.response.text();

        res.json({
            analysis: text
        });

    } catch (err) {
        console.log("error is "+ err);
        res.status(500).json({
            error: err.message || "Something went wrong"
        });
    }
};