import React from "react";
import TypingTitle from "./TypingTitle";

const floatingBlocks = [
  { src: "/assets/nextjs-block.svg", className: "top-15 -left-30" },
  { src: "/assets/js-block.svg", className: "top-20 left-50" },
  { src: "/assets/figma-block.svg", className: "bottom-40 -left-60" },
  { src: "/assets/react-block.svg", className: "top-55 right-26" },
  { src: "/assets/tailwind-block.svg", className: "top-55 -left-40" },
];

const HomeSection = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-start gap-12 py-16 md:py-24 text-[#0B192C] md:pr-[28rem] md:min-h-[520px]">
      
      {/* LEFT COLUMN */}

      <div className="flex-1 max-w-2xl md:ml-35 md:-my-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I’m Kath Panuga</h1>
        <h2 className="text-2xl mb-6 font-bold"> I&apos;m a{" "}
          <TypingTitle items={["Front-end Developer", "UI/UX Designer"]} typingSpeed={80} deletingSpeed={45} pause={1100}  />
      </h2>

        <p className="max-w-2xl -mt-4">
          I build seamless user interfaces, combining UI/UX design and front-end
          development to create responsive web &amp; mobile applications from start to finish.
        </p>

        <div className="flex gap-6 mt-6">
          <a
            href="#projects"
            className="flex items-center gap-3 px-6 py-3 bg-[#0B192C] text-white rounded-[10px] font-medium shadow hover:bg-[#18345c] transition"
          >
            <img src={"/assets/view.png"} alt="Project" width={15} height={15} />
            View my project
          </a>
          <a
            href="/KathPanugaCV.pdf"
            download
            className="flex items-center gap-3 px-6 py-3 bg-[#0B192C] text-white rounded-[10px] font-medium shadow hover:bg-[#18345c] transition"
          >
            <img src={"/assets/download.png"} alt="Download" width={15} height={15} />
            Download CV
          </a>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <p className="font-medium">Follow me on:</p>
          <a href="#" className="-mt-0.5">
            <img src="/assets/linkedin.svg" alt="LinkedIn" width={24} height={24} className="hover:opacity-80 transition" />
          </a>
          <a href="#" className="-mt-0.5">
            <img src="/assets/git.svg" alt="GitHub" width={24} height={24} className="hover:opacity-80 transition" />
          </a>
          <a href="https://www.facebook.com/kahtlenan/" className="-mt-0.5">
            <img src="/assets/fb.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80 transition" />
          </a>
          <a href="#" className="-mt-0.5">
            <img src="/assets/ig.svg" alt="Instagram" width={24} height={24} className="hover:opacity-80 transition" />
          </a>
        </div>
      </div>

      {/* RIGHT: PHOTO + FLOATING IMAGES */}
      <div
        className="
          order-last md:order-none
          self-center
          mt-8 md:mt-0
          md:absolute md:right-12 md:bottom-0
          md:w-[300px] lg:w-[400px]
          pointer-events-none select-none
        "
      >
        {/* Profile image */}
        <img
          src="/assets/kath-toon.png"
          alt="Kath Panuga"
          className="
            relative z-10
            w-full h-145 object-contain
            drop-shadow-2xl
            [filter:drop-shadow(0_24px_48px_rgba(11,25,44,0.25))]
            md:-translate-x-35 translate-y-0"
          loading="eager" decoding="async" 
        />

        {/* Floating Blocks */}
        <ul className="absolute inset-0 z-20 pointer-events-none select-none">
          {floatingBlocks.map((img, i) => (
            <li
              key={i}
              className={`
                absolute
                motion-safe:[animation:float_9s_ease-in-out_infinite,twinkle_2.6s_ease-in-out_infinite]
                ${img.className}
              `}
              style={{
                // 1st = float delay, 2nd = twinkle delay
                animationDelay: `${i * 0.5}s, ${0.25 + i * 0.35}s`,
              }}
            >
              <img
                src={img.src}
                alt={`star-${i}`}
                className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg will-change-transform"
              />
            </li>
          ))}
        </ul>
       
      </div>
    </section>
  );
};

export default HomeSection;
