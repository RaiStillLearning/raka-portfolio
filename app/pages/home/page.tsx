"use client";

import { AnimatedSpan, Terminal, TypingAnimation } from "@/components/ui/terminal";
import { MorphingText } from "@/components/ui/morphing-text";

export default function HeroSection() {
  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
        {/* Morphing Text */}
        <div className="w-full lg:flex-1 flex items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <MorphingText texts={["Rakha", "Arkana"]} />
          </div>
        </div>

        {/* Terminal */}
        <div className="w-full lg:flex-1 flex items-center justify-center">
          <Terminal className="w-full max-w-md">
            <TypingAnimation>
              Initializing Rakha Arkana Portfolio...
            </TypingAnimation>

            <AnimatedSpan>✔ Junior Web Developer</AnimatedSpan>
            <AnimatedSpan>✔ MERN Stack modern Web</AnimatedSpan>
            <AnimatedSpan>✔ Optimizing performance</AnimatedSpan>

            <TypingAnimation>
              System ready. Welcome to my digital workspace.
            </TypingAnimation>
          </Terminal>
        </div>
      </div>
    </section>
  );
}