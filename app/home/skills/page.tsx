"use client";

import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "nodedotjs",
  "express",
  "nextdotjs",
  "mongodb",
  "docker",
  "git",
  "github",
  "vercel",
];

const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}`);

const Page = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 px-6 py-20">
      {/* ✅ KIRI: TEXT SKILL */}
      <div className="w-full lg:w-1/2">
        <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight">
          Skills
        </h1>

        <div className="mt-6">
          <p className="leading-7 text-muted-foreground">
            I specialize in the MERN Stack, focusing on building modern,
            scalable, and high-performance web applications. I enjoy working
            across both front-end and back-end development, ensuring seamless
            user experiences and efficient system performance. Below are some of
            my core technical skills:
          </p>
        </div>
      </div>

      {/* ✅ KANAN: ICON CLOUD */}
      <div className="w-full lg:w-1/2 relative h-[450px] flex items-center justify-center overflow-hidden">
        <IconCloud images={images} />
      </div>
    </div>
  );
};

export default Page;
