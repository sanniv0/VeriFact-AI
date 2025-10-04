import { ContentAnalysis } from "@/components/content-analysis";
import { EducationalTips } from "@/components/educational-tips";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AnalyzerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="mx-auto max-w-5xl text-center mb-12">
            <h2 className="text-3xl font-bold font-headline tracking-tight md:text-4xl lg:text-5xl">
              Combat Misinformation with AI
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Analyze text or links to detect potential misinformation, understand why it's misleading, and learn to identify trustworthy content.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5 items-start">
            <div className="lg:col-span-3">
              <ContentAnalysis />
            </div>
            <aside className="lg:col-span-2 sticky top-8">
              <EducationalTips />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
