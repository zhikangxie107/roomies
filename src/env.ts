// src/env.ts
import * as dotenv from 'dotenv';

dotenv.config();

export const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY as string;

