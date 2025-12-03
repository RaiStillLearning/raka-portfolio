"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

const navItems = [
  { name: "Home", href: "/pages/home" },
  { name: "About", href: "/home/about" },
  { name: "Projects", href: "/home/projects" },
  { name: "Contact", href: "/home/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* LOGO */}
        <Link 
          href="/home" 
          className="text-lg font-bold tracking-tight transition-colors hover:text-primary"
        >
          Rakha Arkana
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-foreground" />
                )}
              </Link>
            );
          })}

          {/* Theme Toggle Desktop */}
          <AnimatedThemeToggler/>

          <Button size="sm" className="ml-2">
            Hire Me
          </Button>
        </div>

        {/* MOBILE MENU TRIGGER */}
        <div className="flex md:hidden items-center gap-2">
          {/* Theme Toggle Mobile */}
          <AnimatedThemeToggler />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="relative h-10 w-10"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent 
              side="right" 
              className="w-full sm:w-[380px] px-0"
            >
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between px-6 pb-6 border-b">
                <SheetTitle className="text-lg font-bold">Menu</SheetTitle>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex flex-col px-6 py-6">
                <div className="flex flex-col gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`group relative rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-accent text-foreground"
                            : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {isActive && (
                          <span className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-foreground" />
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="mt-8 space-y-3">
                  <Button 
                    className="w-full h-12 text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    Hire Me
                  </Button>
                  
                  {/* Optional: Social Links or Additional Info */}
                  <p className="text-center text-xs text-muted-foreground">
                    © 2025 Rakha Arkana
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}