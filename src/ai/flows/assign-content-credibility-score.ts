'use server';
/**
 * @fileOverview Assigns a credibility score to content based on misinformation indicators.
 *
 * - assignContentCredibilityScore - A function that assigns a credibility score to content.
 * - AssignContentCredibilityScoreInput - The input type for the assignContentCredibilityScore function.
 * - AssignContentCredibilityScoreOutput - The return type for the assignContentCredibilityScore function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AssignContentCredibilityScoreInputSchema = z.object({
  content: z.string().describe('The content to analyze for credibility.'),
  indicators: z
    .array(z.string())
    .describe('A list of misinformation indicators identified in the content.'),
});
export type AssignContentCredibilityScoreInput = z.infer<
  typeof AssignContentCredibilityScoreInputSchema
>;

const AssignContentCredibilityScoreOutputSchema = z.object({
  credibilityScore: z
    .number()
    .describe(
      'A score between 0 and 1 indicating the credibility of the content, where 0 is not credible and 1 is highly credible.'
    ),
  explanation: z
    .string()
    .describe(
      'A human-readable explanation of how the credibility score was determined.'
    ),
});
export type AssignContentCredibilityScoreOutput = z.infer<
  typeof AssignContentCredibilityScoreOutputSchema
>;

export async function assignContentCredibilityScore(
  input: AssignContentCredibilityScoreInput
): Promise<AssignContentCredibilityScoreOutput> {
  return assignContentCredibilityScoreFlow(input);
}

const prompt = ai.definePrompt({
  name: 'assignContentCredibilityScorePrompt',
  input: {schema: AssignContentCredibilityScoreInputSchema},
  output: {schema: AssignContentCredibilityScoreOutputSchema},
  prompt: `You are an AI assistant designed to assess the credibility of content based on identified misinformation indicators.

  You will receive the content and a list of misinformation indicators found within the content.
  Your task is to assign a credibility score between 0 and 1 (inclusive) and provide a clear explanation of your reasoning.

  Content: {{{content}}}
  Indicators: {{#each indicators}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Consider the following factors when assigning the score:
  - The number of indicators present in the content.
  - The severity of each indicator.
  - The source of the content (if available).
  - The overall context of the content.

  Output the credibility score along with explanation of the score. The output should be formatted as JSON.
  `,
});

const assignContentCredibilityScoreFlow = ai.defineFlow(
  {
    name: 'assignContentCredibilityScoreFlow',
    inputSchema: AssignContentCredibilityScoreInputSchema,
    outputSchema: AssignContentCredibilityScoreOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
