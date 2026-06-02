import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import apiRoutes from "./routes/apiRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', apiRoutes);

app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Server is running on port:${process.env.PORT}`);
});