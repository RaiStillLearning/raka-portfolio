"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navItems = [
  { name: "Home", href: "/pages/home" },
  { name: "About", href: "/home/about" },
  { name: "Projects", href: "/home/projects" },
  { name: "Contact", href: "/home/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* LOGO */}
        <Link href="/home" className="text-xl font-bold">
          Rakha Arkana
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-black"
                    : "text-muted-foreground hover:text-black"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Button>Hire Me</Button>
        </div>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <div className="flex flex-col gap-4 mt-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`text-sm font-medium ${
                        isActive ? "text-black" : "text-muted-foreground"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                <Button className="mt-4">Hire Me</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
