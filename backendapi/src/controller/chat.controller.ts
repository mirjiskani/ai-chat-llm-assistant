import type { Request, Response } from "express";
import getOpenAI from "../services/openai.service.js";

export const chatWithOpenAI = async (req: Request, res: Response) => {
    try {
      //  res.json({ success: true, message: "Chat endpoint is working!" });
      const { message } = req.body;
        // Basic validation If messages is not provided, return a 400 error
        if (!message) {
            return res.status(400).json({
                success: false,
                message: "Message is required",
            });
        }
        // Call OpenAI API to get the chat completion
        const openai = getOpenAI();
        const response = await openai.chat.completions.create({
            model: process.env.OPENAI_MODEL || "",
            // messages,
            messages: [
                {
                    role: "user",
                    content: message,
                },
            ],
        });
        res.json(response);
    }
    catch (error) {
        console.error("Error in chatController:", error);
        res.status(500).json({ error: "An error occurred while processing the chat request." });
    }
};
