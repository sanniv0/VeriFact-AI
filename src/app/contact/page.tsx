import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h1 className="text-4xl font-bold font-headline tracking-tight md:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We'd love to hear from you. Whether you have a question, feedback, or a partnership inquiry, please get in touch.
            </p>
          </div>

          <Card className="mx-auto max-w-xl shadow-lg">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message..." rows={5} />
                </div>
                 <Button type="submit" className="w-full">
                    Submit
                </Button>
              </form>
            </CardContent>
          </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
}
