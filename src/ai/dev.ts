import { config } from 'dotenv';
config();

import '@/ai/flows/analyze-content-for-misinformation.ts';
import '@/ai/flows/assign-content-credibility-score.ts';
import '@/ai/flows/assess-source-reliability.ts';
import '@/ai/flows/generate-misinformation-explanation.ts';
import '@/ai/tools/fetch-url-content.ts';
