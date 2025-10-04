'use server';

/**
 * @fileOverview Assesses the reliability of a source based on its context.
 *
 * - assessSourceReliability - A function that assesses the reliability of a source.
 * - AssessSourceReliabilityInput - The input type for the assessSourceReliability function.
 * - AssessSourceReliabilityOutput - The return type for the assessSourceReliability function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssessSourceReliabilityInputSchema = z.object({
  sourceUrl: z.string().url().describe('The URL of the source to assess.'),
});
export type AssessSourceReliabilityInput = z.infer<typeof AssessSourceReliabilityInputSchema>;

const AssessSourceReliabilityOutputSchema = z.object({
  reliabilityScore: z.number().describe('A score indicating the reliability of the source (0-1).'),
  explanation: z.string().describe('An explanation of why the source is considered reliable or unreliable.'),
});
export type AssessSourceReliabilityOutput = z.infer<typeof AssessSourceReliabilityOutputSchema>;

export async function assessSourceReliability(input: AssessSourceReliabilityInput): Promise<AssessSourceReliabilityOutput> {
  return assessSourceReliabilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assessSourceReliabilityPrompt',
  input: {schema: AssessSourceReliabilityInputSchema},
  output: {schema: AssessSourceReliabilityOutputSchema},
  prompt: `You are an expert in identifying reliable sources of information.

You will be provided with a URL and your task is to assess the reliability of the source and provide a reliability score between 0 and 1 (inclusive), along with an explanation.

URL: {{{sourceUrl}}}
`,
});

const assessSourceReliabilityFlow = ai.defineFlow(
  {
    name: 'assessSourceReliabilityFlow',
    inputSchema: AssessSourceReliabilityInputSchema,
    outputSchema: AssessSourceReliabilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
