"use client";

import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const SkillSet = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
      {/* ✅ KIRI: TEXT */}
      <div className="w-full lg:w-1/2">
        <h1 className="scroll-m-20 text-left text-4xl font-extrabold tracking-tight">
          About Me
        </h1>

        <div className="mt-6">
          <p className="leading-7 text-muted-foreground">
            I am a creative and dedicated Junior Web Developer with a strong
            interest in Web3 and Artificial Intelligence. I love transforming
            ideas into interactive digital experiences and exploring how
            decentralized technologies and AI can shape the future of the web.
          </p>
        </div>
      </div>

      {/* ✅ KANAN: ORBIT */}
      <div className="w-full lg:w-1/2 relative h-[450px] flex items-center justify-center overflow-hidden">
        {/* Lingkaran Dalam */}
        <OrbitingCircles radius={90} iconSize={40}>
          <img src="/icons/block-chain.png" alt="blockchain" />
          <img src="/icons/btc-icon.png" alt="btc" />
        </OrbitingCircles>

        {/* Lingkaran Luar */}
        <OrbitingCircles radius={150} reverse iconSize={36} speed={0.9}>
          <img src="/icons/eth-icon.png" alt="eth" />
          <img src="/icons/react-icon.png" alt="react" />
          <img src="/icons/solidity-icon.png" alt="solidity" />
          <img src="/icons/web3-icon.png" alt="web3" />
        </OrbitingCircles>
      </div>
    </div>
  );
};

export default SkillSet;
