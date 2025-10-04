
"use client";

import { useEffect, useState, useRef, useActionState } from "react";
import { useFormStatus } from "react-dom";
import { analyzeContentAction, type AnalysisState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertCircle, FileText, Link as LinkIcon, Loader2, ScanLine, Sparkles, ThumbsUp, ThumbsDown, Info, Shield, GitBranch } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

const initialState: AnalysisState = { type: 'idle' };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <ScanLine className="mr-2 h-4 w-4" />
          Analyze Content
        </>
      )}
    </Button>
  );
}

const ScoreDisplay = ({ score, title }: { score: number, title: string }) => {
  const scorePercentage = Math.round(score * 100);
  const getScoreColor = (s: number) => {
    if (s > 70) return "bg-green-500";
    if (s > 40) return "bg-yellow-500";
    return "bg-red-500";
  };
  const scoreColor = getScoreColor(scorePercentage);

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-baseline">
        <span className="text-sm font-medium text-muted-foreground">{title}</span>
        <span className={`text-xl font-bold text-foreground`}>{scorePercentage}%</span>
      </div>
      <Progress value={scorePercentage} className="h-2 [&>div]:transition-all [&>div]:duration-500" indicatorClassName={scoreColor} />
    </div>
  );
};


export function ContentAnalysis() {
  const [formState, formAction] = useActionState(analyzeContentAction, initialState);
  const [activeTab, setActiveTab] = useState("text");
  const { toast } = useToast();
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formState.type === 'error') {
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: formState.message,
      });
    } else if (formState.type === 'success') {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [formState, toast]);

  return (
    <div className="space-y-8">
      <Card className="bg-card/80 backdrop-blur-sm border-white/10">
        <form action={formAction}>
          <CardHeader>
            <CardTitle>Content Analysis</CardTitle>
            <CardDescription>Enter text or a URL to check for misinformation indicators.</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <input type="hidden" name="type" value={activeTab} />
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="text"><FileText className="mr-2 h-4 w-4"/>Text Input</TabsTrigger>
                <TabsTrigger value="url"><LinkIcon className="mr-2 h-4 w-4"/>URL</TabsTrigger>
              </TabsList>
              <TabsContent value="text" className="mt-4">
                <Textarea
                  name="content"
                  placeholder="Paste your text here... for example, a news article, a social media post, or an email."
                  rows={8}
                  className="text-base bg-background/50 border-white/20"
                />
              </TabsContent>
              <TabsContent value="url" className="mt-4">
                <Input
                  name="content"
                  type="url"
                  placeholder="https://example.com/article"
                  className="text-base bg-background/50 border-white/20"
                />
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-end">
            <SubmitButton />
          </CardFooter>
        </form>
      </Card>

      <div ref={resultsRef} className="scroll-mt-24">
        {formState.type === 'success' ? (
          <div className="space-y-6 animate-in fade-in-50 duration-500">
            <Card className="bg-card/80 backdrop-blur-sm border-white/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Sparkles className="h-6 w-6 text-primary" />
                        <span>Analysis Complete</span>
                    </CardTitle>
                    <CardDescription>Here's the breakdown of the analyzed content.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <ScoreDisplay score={formState.analysis.credibilityScore} title="Content Credibility Score" />
                    {formState.source && <ScoreDisplay score={formState.source.reliabilityScore} title="Source Reliability Score" />}
                </CardContent>
            </Card>

            <Card className="bg-card/80 backdrop-blur-sm border-white/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Info className="h-5 w-5"/>Explanation</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm max-w-none text-foreground prose-p:text-muted-foreground">
                   <p>{formState.analysis.explanation}</p>
                </CardContent>
            </Card>

            {formState.source && (
                 <Card className="bg-card/80 backdrop-blur-sm border-white/10">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><GitBranch className="h-5 w-5"/>Source Context</CardTitle>
                    </CardHeader>
                    <CardContent className="prose prose-sm max-w-none text-foreground prose-p:text-muted-foreground">
                        <p>{formState.source.explanation}</p>
                    </CardContent>
                </Card>
            )}

            <Card className="bg-card/80 backdrop-blur-sm border-white/10">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Shield className="h-5 w-5"/>Highlighted Content</CardTitle>
                    <CardDescription>Sections with potential misinformation indicators are highlighted.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div
                      className="prose prose-sm max-w-none text-foreground rounded-lg border border-white/10 bg-black/20 p-4 prose-p:text-muted-foreground"
                      dangerouslySetInnerHTML={{ __html: formState.analysis.highlightedContent }}
                    />
                </CardContent>
                 <CardFooter className="flex-col sm:flex-row items-center justify-end gap-4 text-sm">
                    <span className="text-muted-foreground">Was this analysis helpful?</span>
                    <div className="flex gap-2">
                         <Button variant="outline" size="sm" onClick={() => toast({title: "Thank you for your feedback!"})}>
                            <ThumbsUp className="h-4 w-4 mr-2" />
                            Helpful
                        </Button>
                        <Button variant="outline" size="sm" onClick={() => toast({title: "Thank you for your feedback!"})}>
                            <ThumbsDown className="h-4 w-4 mr-2" />
                            Not Helpful
                        </Button>
                    </div>
                </CardFooter>
            </Card>
          </div>
        ) : formState.type === 'error' ? (
             <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Analysis Error</AlertTitle>
                <AlertDescription>
                    {formState.message}
                </AlertDescription>
            </Alert>
        ) : null}
      </div>
    </div>
  );
}
