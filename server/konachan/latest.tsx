import express from "express";
import request from "../request";
import type { Purity } from "../../src/types/images"
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await request(
            "konachan",
            "post.json",
            {
                limit: 10,
                tags: "rating:safe",
                ...req.query
            },
            { method: "GET" }
        );
        //只返回需要的字段
        const result = data.map((item: any) => ({
            id: item.id,
            source: "konachan",
            height: item.height,
            width: item.width,
            purity: (item.rating === "s" ? "sfw" : "nsfw") as Purity,
            sample: item.preview_url,
            url: item.path,
            resolution: `${item.width}x${item.height}`,
        }));
        res.json(result);
    } catch (e) {
        res.status(500).json({ error: "Failed to fetch konachan latest" });
    }
});

export default router;
