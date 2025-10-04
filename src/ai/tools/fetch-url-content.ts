'use server';
/**
 * @fileOverview A tool for fetching and extracting the main text content from a URL.
 * 
 * - fetchUrlContent - A Genkit tool that takes a URL and returns the text content.
 */
import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { JSDOM } from 'jsdom';

export const fetchUrlContent = ai.defineTool(
  {
    name: 'fetchUrlContent',
    description: 'Fetches the main text content of a given URL.',
    inputSchema: z.object({
      url: z.string().url().describe('The URL to fetch content from.'),
    }),
    outputSchema: z.object({
      text: z.string().describe('The extracted text content from the URL.'),
    }),
  },
  async ({ url }) => {
    try {
      const response = await fetch(url, { headers: { 'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' } });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const html = await response.text();
      const dom = new JSDOM(html);
      const doc = dom.window.document;

      // Remove script and style elements
      doc.querySelectorAll('script, style, noscript, iframe, header, footer, nav, aside').forEach(el => el.remove());

      // Attempt to find the main content area
      let mainContent = doc.querySelector('main, article, [role="main"]');
      if (!mainContent) {
          // Fallback to body if no main element is found
          mainContent = doc.body;
      }
      
      const text = mainContent.textContent || "";
      
      // Clean up the text
      const cleanText = text.replace(/\s+/g, ' ').trim();

      return { text: cleanText };
    } catch (error) {
      console.error(`Error fetching URL content for ${url}:`, error);
      throw new Error(`Failed to fetch or process content from URL: ${url}`);
    }
  }
);
