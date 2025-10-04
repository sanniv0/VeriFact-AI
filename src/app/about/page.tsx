import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="mx-auto max-w-5xl text-center mb-12">
            <h1 className="text-4xl font-bold font-headline tracking-tight md:text-5xl lg:text-6xl">
              About VeriFact AI
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Our mission is to empower individuals to navigate the digital world with confidence by providing tools to identify and understand misinformation.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Target className="h-10 w-10 text-primary" />
                <CardTitle>Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p>To combat the spread of misinformation by making fact-checking and source analysis accessible to everyone. We believe in a more informed and discerning digital society.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <Lightbulb className="h-10 w-10 text-primary" />
                <CardTitle>Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p>We envision a future where people can easily distinguish between credible information and deceptive content, fostering a healthier and more trustworthy online environment.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <CheckCircle className="h-10 w-10 text-primary" />
                <CardTitle>Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2">
                  <li>Accuracy</li>
                  <li>Transparency</li>
                  <li>Education</li>
                  <li>Empowerment</li>
                </ul>
              </CardContent>
            </Card>
          </div>

           <div className="mx-auto max-w-5xl text-center mt-16">
            <h2 className="text-3xl font-bold font-headline tracking-tight md:text-4xl">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              VeriFact AI uses state-of-the-art large language models to analyze content. The AI has been trained to identify common patterns and indicators of misinformation, such as emotional language, unverified claims, and logical fallacies. It cross-references information and assesses the reliability of sources to provide a comprehensive analysis.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
