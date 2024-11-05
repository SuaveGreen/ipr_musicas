// src/config.ts
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.REACT_APP_YOUTUBE_API_KEY) {
  throw new Error("REACT_APP_YOUTUBE_API_KEY is not defined in .env file");
}

export const API_KEY: string = process.env.REACT_APP_YOUTUBE_API_KEY;
