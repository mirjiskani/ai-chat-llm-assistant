import type { Express } from "express";
import { chatWithOpenAI } from "../controller/chat.controller.js";


const router = (app: Express) => {
  app.post("/api/chat", chatWithOpenAI);
};

export { router as chatRoutes };