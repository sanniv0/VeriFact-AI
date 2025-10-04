import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqPage() {
  const faqs = [
    {
      question: "What is VeriFact AI?",
      answer: "VeriFact AI is a tool that uses artificial intelligence to analyze text and URLs for potential misinformation. It provides a credibility score, an explanation of its findings, and highlights questionable content.",
    },
    {
      question: "How accurate is the analysis?",
      answer: "Our AI is designed to be highly accurate, but it is not infallible. It should be used as a tool to assist your own critical thinking and judgment. The credibility scores are probabilistic and should be considered as indicators, not definitive verdicts.",
    },
    {
      question: "What kind of content can I analyze?",
      answer: "You can analyze news articles, social media posts, blog entries, or any other text-based content. You can either paste the text directly or provide a URL.",
    },
    {
      question: "Is my data safe?",
      answer: "We take your privacy seriously. The content you analyze is not stored or used for any purpose other than providing you with the analysis results. We do not share your data with third parties.",
    },
    {
        question: "How does the source reliability score work?",
        answer: "When you provide a URL, our AI assesses the source's reputation, historical accuracy, and potential biases. It looks for indicators like clear editorial standards, author transparency, and whether the source is frequently cited by other reputable outlets.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold font-headline tracking-tight md:text-5xl lg:text-6xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Find answers to common questions about VeriFact AI.
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
             <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
