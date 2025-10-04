'use server';
/**
 * @fileOverview Analyzes content for potential misinformation indicators.
 *
 * - analyzeContentForMisinformation - Analyzes content and returns a credibility score and explanation.
 * - AnalyzeContentInput - The input type for the analyzeContentForMisinformation function.
 * - AnalyzeContentOutput - The return type for the analyzeContentForMisinformation function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { fetchUrlContent } from '../tools/fetch-url-content';

const urlRegex = /^(https?:\/\/[^\s]+)/;

const AnalyzeContentInputSchema = z.object({
  content: z.string().describe('The content to analyze, either text or a URL.'),
});
export type AnalyzeContentInput = z.infer<typeof AnalyzeContentInputSchema>;

const AnalyzeContentOutputSchema = z.object({
  credibilityScore: z.number().describe('A score between 0 and 1 indicating the credibility of the content, where 0 is completely untrustworthy and 1 is completely trustworthy.'),
  explanation: z.string().describe('An explanation of why the content may be misleading, including specific indicators found.'),
  highlightedContent: z.string().describe('The original content with misinformation indicators highlighted.'),
});
export type AnalyzeContentOutput = z.infer<typeof AnalyzeContentOutputSchema>;

export async function analyzeContentForMisinformation(input: AnalyzeContentInput): Promise<AnalyzeContentOutput> {
  return analyzeContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeContentPrompt',
  input: {schema: AnalyzeContentInputSchema},
  output: {schema: AnalyzeContentOutputSchema},
  prompt: `You are an AI assistant designed to detect misinformation in text content.

  Analyze the following content and determine its credibility.

  Content: {{{content}}}

  Provide a credibility score between 0 and 1 (0 being completely untrustworthy, and 1 being completely trustworthy).
  Explain your reasoning for the score, highlighting specific misinformation indicators found in the content.
  Also return the original content with the misinformation indicators highlighted.

  Credibility Score:
  Explanation:
  Highlighted Content:`,
});

const analyzeContentFlow = ai.defineFlow(
  {
    name: 'analyzeContentFlow',
    inputSchema: AnalyzeContentInputSchema,
    outputSchema: AnalyzeContentOutputSchema,
  },
  async input => {
    let contentToAnalyze = input.content;
    const isUrl = urlRegex.test(input.content);
    
    if (isUrl) {
      try {
        const urlContent = await fetchUrlContent({url: input.content});
        contentToAnalyze = urlContent.text;
      } catch (error) {
        console.error('Failed to fetch URL content:', error);
        // Let the model know fetching failed.
        contentToAnalyze = `Failed to fetch content from URL: ${input.content}. Please inform the user about the failure.`;
      }
    }

    const {output} = await prompt({ content: contentToAnalyze });
    
    // If the input was a URL, we replace the fetched content in the output 
    // with the original URL to avoid showing a huge wall of text.
    if (isUrl && output) {
        // Use a simple replacement; assuming the model includes some part of the analyzed text.
        // A more robust solution might be needed if the model summarizes heavily.
        if (output.highlightedContent.includes(contentToAnalyze.substring(0, 100))) {
            output.highlightedContent = output.highlightedContent.replace(contentToAnalyze, input.content);
        } else {
            // If the model didn't include the content, just prepend the URL.
            output.highlightedContent = `${input.content}\n\n${output.highlightedContent}`;
        }
    }

    return output!;
  }
);
