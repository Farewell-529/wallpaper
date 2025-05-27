import express from "express";
import cors from "cors";
import wallhavenLatest from "./wallhaven/latest";
import wallhavenDetail from "./wallhaven/detail";
import wallhavenSearch from "./wallhaven/search";
import  konachanLatest  from "./konachan/latest";
import  konachanDetail from "./konachan/detail";
import  konachanSearch  from "./konachan/search";
import imageProxy from "./image"; // 假设文件是 image.ts

const app = express();
app.use(cors());
app.use("/api/wallhaven/latest", wallhavenLatest);
app.use("/api/wallhaven/detail", wallhavenDetail);
app.use("/api/wallhaven/search", wallhavenSearch);
app.use("/api/konachan/latest", konachanLatest);
app.use("/api/konachan/detail", konachanDetail);
app.use("/api/konachan/search", konachanSearch);
app.use("/api/image", imageProxy);


const PORT = 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
