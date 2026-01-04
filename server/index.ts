console.log("SERVER INDEX LOADED");

import "dotenv/config";
import express from "express";
import cors from "cors";

import { handleDemo } from "./routes/demo";
import contact from "./routes/contact";

export function createServer() {
  const app = express();

  // --------------------
  // Middleware
  // --------------------
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // --------------------
  // Health / Test Routes
  // --------------------
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // --------------------
  // Contact / Lead Route
  // --------------------
  app.post("/api/contact", contact);

  return app;
}
