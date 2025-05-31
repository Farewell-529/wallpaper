import express from "express";
import fetch from "node-fetch";
import { HttpsProxyAgent } from "https-proxy-agent";

const router = express.Router();
const proxy = "http://127.0.0.1:7890";
const agent = new HttpsProxyAgent(proxy);

router.get('/', async (req, res): Promise<void> => {
  const imageUrl = req.query.url as string;

  if (!imageUrl) {
    res.status(400).send("Missing image url");
    return;
  }

  try {
    const response = await fetch(imageUrl, { agent });
    // const response = await fetch(imageUrl);

    if (!response.ok) {
      res.status(response.status).send("Failed to fetch image");
      return;
    } 
    const contentType = response.headers.get("content-type") || "image/jpeg";
    const contentLength = response.headers.get("content-length");

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400"); // 缓存一天
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    if (!response.body) {
      res.status(500).send("No response body");
      return;
    }

    response.body.pipe(res);
  } catch (err) {
    res.status(500).send("Image proxy failed");
  }
});

export default router;