"use client";

import { useState } from "react";
import Link from "next/link";
import { Brain, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Brain className="h-6 w-6" />
          <span className="text-xl font-bold">AI Build</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-6">
          <Link href="#features" className="text-foreground/60 hover:text-foreground">Features</Link>
          <Link href="#about" className="text-foreground/60 hover:text-foreground">About</Link>
          <Link href="#testimonials" className="text-foreground/60 hover:text-foreground">Testimonials</Link>
          <Link href="#contact" className="text-foreground/60 hover:text-foreground">Contact</Link>
          <ThemeToggle />
          <Button>Get Started</Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col space-y-4 pb-4">
            <Link href="#features" className="text-foreground/60 hover:text-foreground">Features</Link>
            <Link href="#about" className="text-foreground/60 hover:text-foreground">About</Link>
            <Link href="#testimonials" className="text-foreground/60 hover:text-foreground">Testimonials</Link>
            <Link href="#contact" className="text-foreground/60 hover:text-foreground">Contact</Link>
            <Button>Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
}