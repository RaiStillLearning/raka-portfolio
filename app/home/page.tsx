"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

import { MorphingText } from "@/components/ui/morphing-text";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { TextAnimate } from "@/components/ui/text-animate";
import { motion } from "framer-motion";

//routes import section
import AboutMe from "./about/page";

export default function HeroSection() {
  return (
    <>
      <div className="cursor-none">
        <SmoothCursor />

        {/* ================= HOME ================= */}
        <section
          id="home"
          className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Morphing Text */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:flex-1 flex flex-col items-center justify-center gap-4"
            >
              {/* ✅ MORPHING TEXT DI ATAS */}
              <MorphingText texts={["Rakha", "Arkana"]} />

              {/* ✅ TEXT ANIMATE DI BAWAHNYA */}
              <TextAnimate animation="slideLeft" by="character">
                Creative Web Developer crafting modern experiences
              </TextAnimate>
            </motion.div>

            {/* Terminal */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="w-full lg:flex-1 flex items-center justify-center"
            >
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
            </motion.div>
          </div>
        </section>

        {/* ================= ABOUT ================= */}
        {/* ================= ABOUT ================= */}
        <motion.article
          id="about"
          className="min-h-screen w-full flex items-center justify-center px-6"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* ✅ WRAPPER KIRI-KANAN */}
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12">
            {/* ✅ KIRI: ABOUT TEXT */}
            <div className="w-full lg:w-1/2 flex justify-start">
              <AboutMe />
            </div>

            {/* ✅ KANAN: ORBITING CIRCLES */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              {/* <div className="relative h-[500px] w-[500px]">
                <OrbitingCircles>
                  <File />
                  <Settings />
                  <File />
                </OrbitingCircles>
                <OrbitingCircles radius={100} reverse>
                  <File />
                  <Settings />
                  <File />
                  <Search />
                </OrbitingCircles>
              </div> */}
            </div>
          </div>
        </motion.article>
      </div>
    </>
  );
}
