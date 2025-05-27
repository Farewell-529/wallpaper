import express from "express";
import request from "../request";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await request(
      "wallhaven",
      "search",
      { sorting: "date_added", order: "desc", ...req.query },
      { method: "GET" }
    );
    // 只返回需要的字段
    const result = data.data.map((item: any) => ({
      id: item.id,
      source: "wallhaven",
      height: item.dimension_y,
      width: item.dimension_x,
      purity: item.purity,
      sample: item.thumbs.small,
      url: item.path,
      resolution: item.resolution,
    }));
    res.json(result);
  } catch (e) {
    res.status(500).json({ error: "Failed to fetch wallhaven latest" });
  }
});

export default router;
