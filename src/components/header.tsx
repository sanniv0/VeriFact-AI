import { Menu, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "./ui/sheet";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-transparent sticky top-0 z-50 backdrop-blur-sm">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <ShieldCheck className="h-7 w-7 text-primary" />
        <span className="font-headline text-xl font-semibold">VeriFact AI</span>
      </Link>
      
      {/* Desktop Navigation */}
      <nav className="ml-auto hidden md:flex gap-4 sm:gap-6 items-center">
        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Home
        </Link>
        <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="/faq" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          FAQ
        </Link>
        <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
          Contact
        </Link>
        <Button asChild>
          <Link href="/analyzer">Analyze Content</Link>
        </Button>
      </nav>

      {/* Mobile Navigation */}
      <div className="ml-auto md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Main navigation menu</SheetDescription>
            <nav className="grid gap-6 text-lg font-medium mt-8">
              <SheetClose asChild>
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                  <ShieldCheck className="h-6 w-6 text-primary" />
                  <span>VeriFact AI</span>
                </Link>
              </SheetClose>
               <SheetClose asChild>
                <Link href="/" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  Home
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/about" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  About
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/faq" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  FAQ
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="/contact" className="text-muted-foreground hover:text-primary" prefetch={false}>
                  Contact
                </Link>
              </SheetClose>
               <SheetClose asChild>
                 <Link href="/analyzer" className="mt-4">
                    <Button className="w-full">Analyze Content</Button>
                 </Link>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
