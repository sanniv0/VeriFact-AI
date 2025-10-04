import { Lightbulb, Scale, BookOpen, ShieldQuestion, Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const tips = [
  {
    icon: <ShieldQuestion className="h-5 w-5 text-primary" />,
    title: "Check the Source",
    content: "Investigate the website and author. Are they reputable? Do they have expertise? Look for an 'About Us' section and contact information. Anonymous sources are less credible.",
  },
  {
    icon: <BookOpen className="h-5 w-5 text-primary" />,
    title: "Read Beyond the Headline",
    content: "Headlines are designed to get clicks and can be sensationalized. Read the full article to understand the complete story and get the necessary context before sharing.",
  },
  {
    icon: <Scale className="h-5 w-5 text-primary" />,
    title: "Watch for Biased Language",
    content: "Emotionally charged or biased language can be a red flag. Credible sources usually present information in a neutral, objective tone. Be wary of content that aims to make you angry or fearful.",
  },
  {
    icon: <Search className="h-5 w-5 text-primary" />,
    title: "Verify with Multiple Sources",
    content: "If a story is important, it will likely be covered by multiple news outlets. Cross-reference information with other trusted sources to confirm its accuracy. This is a key step in fact-checking.And Always Verify the Facts as sometimes the news outlets may present the facts in a different way.",
  },
];

export function EducationalTips() {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-accent" />
          <span>Stay Informed, Stay Sharp</span>
        </CardTitle>
        <CardDescription>
          Empower yourself against misinformation with these key strategies.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
          {tips.map((tip, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>
                <div className="flex items-center gap-3 text-left">
                  {tip.icon}
                  <span className="font-semibold">{tip.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {tip.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
}
