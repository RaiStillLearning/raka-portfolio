
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Dock, DockIcon } from "@/components/ui/dock";

import { Github, Instagram, Linkedin, Mail } from "lucide-react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 w-full">{children}</main>

      <footer className="border-t p-6 bg-background">
        <div className="flex flex-col items-center gap-4 relative">
          {/* Dock Icons */}
          <Dock
            className="mx-auto"
            iconSize={40}
            iconMagnification={60}
            iconDistance={140}
            direction="middle"
          >
            <DockIcon>
              <Link
                href="https://github.com/RaiStillLearning"
                aria-label="Github "
              >
                <Github className="size-6" />
              </Link>
            </DockIcon>
            <DockIcon>
              <Link
                href="https://www.linkedin.com/in/rakha-arkana-6aba03353/ "
                aria-label="Linkedin "
              >
                <Linkedin className="size-6" />
              </Link>
            </DockIcon>
            <DockIcon>
              <Link
                href="https://www.instagram.com/arkanaavv/ "
                aria-label="Instagram "
              >
                <Instagram className="size-6" />
              </Link>
            </DockIcon>
          </Dock>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            Contact Person: +62 852-1060-1398
          </p>
          <p className="text-sm text-muted-foreground text-center">
            © 2025 Rakha Arkana
          </p>
        </div>
      </footer>
    </div>
  );
}
