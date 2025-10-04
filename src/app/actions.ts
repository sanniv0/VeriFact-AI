
"use server";

import { analyzeContentForMisinformation, type AnalyzeContentOutput } from "@/ai/flows/analyze-content-for-misinformation";
import { assessSourceReliability, type AssessSourceReliabilityOutput } from "@/ai/flows/assess-source-reliability";
import { z } from "zod";

const urlSchema = z.string().url({ message: "Please enter a valid URL." });

export type AnalysisResult = {
  type: 'success';
  analysis: AnalyzeContentOutput;
  source?: AssessSourceReliabilityOutput;
};

export type AnalysisState = 
  | AnalysisResult 
  | { type: 'error'; message: string }
  | { type: 'idle' };

export async function analyzeContentAction(
  prevState: AnalysisState,
  formData: FormData
): Promise<AnalysisState> {
  const type = formData.get("type") as "text" | "url";
  const content = formData.get("content") as string;

  if (!content) {
    return { type: 'error', message: "Content or URL cannot be empty." };
  }

  try {
    let sourceAnalysis: AssessSourceReliabilityOutput | undefined = undefined;

    if (type === "url") {
      const validation = urlSchema.safeParse(content);
      if (!validation.success) {
        return { type: 'error', message: validation.error.errors[0].message };
      }
      // Run source and content analysis in parallel for URLs
      const [sourceResult, analysisResult] = await Promise.all([
        assessSourceReliability({ sourceUrl: content }),
        analyzeContentForMisinformation({ content }),
      ]);
      sourceAnalysis = sourceResult;
      return {
        type: 'success',
        analysis: analysisResult,
        source: sourceAnalysis,
      };

    } else {
      // Just run content analysis for text
      const analysisResult = await analyzeContentForMisinformation({ content });
      return {
        type: 'success',
        analysis: analysisResult,
        source: undefined,
      };
    }

  } catch (e) {
    console.error("Analysis Error:", e);
    return { type: 'error', message: "An unexpected error occurred during analysis. The AI model may be unavailable. Please try again later." };
  }
}
