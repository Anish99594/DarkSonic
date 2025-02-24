import "dotenv/config";
import OpenAI from "openai";
import express, { Request, Response } from "express";
import cors from "cors";
import { createAssistant } from "./openai/createAssistant.js";
import { createThread } from "./openai/createThread.js";
import { createRun } from "./openai/createRun.js";
import { performRun } from "./openai/performRuns.js";

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const client = new OpenAI();
let assistant: OpenAI.Beta.Assistant;
let thread: OpenAI.Beta.Thread;

// Initialize Assistant and Thread once
async function initialize() {
  assistant = await createAssistant(client);
  thread = await createThread(client);
  console.log("Assistant and Thread initialized.");
}

initialize();

// Define request body type
interface ChatRequestBody {
  message: string;
}

// API Route to handle chat messages
app.post("/chat", async (req: Request<{}, {}, ChatRequestBody>, res: Response) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: "Message is required" });

  try {
    // Add the user's message to the thread
    await client.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    // Create and perform the run
    const run = await createRun(client, thread, assistant.id);
    const result = await performRun(run, client, thread);

    res.json({
      response: result?.type === "text" ? result.text.value : "No response",
    });
  } catch (error) {
    console.error("Error in chat:", error instanceof Error ? error.message : "Unknown error");
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
