import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Shield, Bot, BarChart } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI-Powered Analysis",
      description: "Leverage advanced AI to analyze text and URLs for common misinformation patterns, including emotional language, logical fallacies, and unverified claims."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Source Reliability",
      description: "Assess the credibility of sources by evaluating their reputation, historical accuracy, and potential biases to provide a comprehensive reliability score."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Credibility Score",
      description: "Receive a clear, data-driven credibility score for content, helping you quickly gauge its trustworthiness before you read or share."
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-primary" />,
        title: "Educational Insights",
        description: "Learn to spot misinformation on your own with highlighted content and detailed explanations that teach you what to look for."
    }
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  VeriFact AI
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Your partner in combating misinformation. Analyze content, verify sources, and learn to identify trustworthy information with the power of AI.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg">
                    <Link
                    href="/analyzer"
                    >
                    Start Analyzing
                    </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-16 md:py-24 bg-card/50">
            <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-5xl text-center mb-12">
                    <h2 className="text-3xl font-bold font-headline tracking-tight md:text-4xl">Why VeriFact AI?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">A smarter way to navigate the digital world.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-transparent border-none shadow-none text-center">
                            <CardHeader className="items-center">
                                {feature.icon}
                                <CardTitle className="mt-4">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

        <section className="w-full py-20 md:py-32">
            <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-4">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                    <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Simple Steps to Clarity</h2>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                       Our process is designed to be straightforward. Paste text or a URL, and our AI will handle the rest, giving you a clear and concise breakdown of the content's credibility.
                    </p>
                    <ul className="grid gap-4">
                        <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                            <div>
                                <h3 className="font-semibold">Submit Your Content</h3>
                                <p className="text-muted-foreground">Provide text or a URL to the analyzer.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                            <div>
                                <h3 className="font-semibold">AI Analysis</h3>
                                <p className="text-muted-foreground">Our model scans for misinformation indicators and assesses the source.</p>
                            </div>
                        </li>
                         <li className="flex items-start gap-4">
                            <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-accent" />
                            <div>
                                <h3 className="font-semibold">Review the Report</h3>
                                <p className="text-muted-foreground">Get a credibility score, highlighted text, and a detailed explanation.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                 <img
                    alt="How it works"
                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                    src="https://picsum.photos/seed/1/600/400"
                    width="600"
                    height="400"
                    data-ai-hint="abstract technology"
                 />
            </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
