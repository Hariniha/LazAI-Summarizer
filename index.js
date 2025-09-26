#!/usr/bin/env node
import fs from "fs";
import { Agent } from "alith";
import "dotenv/config";

if (!process.env.GROQ_API_KEY) {
  throw new Error("Missing GROQ_API_KEY in environment");
}

// LazAI Agent setup
const agent = new Agent({
  model: "openai/gpt-oss-120b",
  apiKey: process.env.GROQ_API_KEY,
  baseUrl: "https://api.groq.com/openai/v1",
});

// Wrapper for asking LazAI
async function askLazAI(prompt) {
  const response = await agent.prompt(prompt);
  return response.output_text || response; // handle both string/structured
}

// Summarizer function
async function summarize(input) {
  let text = input;

  // If input looks like a file path, try reading the file
  if (fs.existsSync(input)) {
    text = fs.readFileSync(input, "utf8");
  }

  const output = await askLazAI(`Summarize this in 2 sentences:\n${text}`);
  console.log("\n📝 Summary:\n", output, "\n");
}

// CLI handler
const [, , ...args] = process.argv;
if (args.length > 0) {
  summarize(args.join(" "));
} else {
  console.log("Usage: summarize <text or file-path>");
}
