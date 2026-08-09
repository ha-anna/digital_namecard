"use client";

import { motion } from "motion/react";

type CardContent = {
  title: string;
  name: string;
  description: string;
  back: {
    heading: string;
    description: string;
    links?: {
      label: string;
      href: string;
    }[];
  };
};

type TarotCardFaceProps = {
  card: CardContent;
  flipped: boolean;
  language: "en" | "ko" | "pl";
};

export default function TarotCardFace({
  card,
  flipped,
  language,
}: TarotCardFaceProps) {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{
        rotateY: flipped ? 180 : 0,
        y: flipped ? -3 : 0,
      }}
      transition={{
        duration: 0.9,
        times: [0, 0.45, 1],
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* ================= FRONT ================= */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-purple-400/50
          bg-gradient-to-br
          from-[#211033]
          via-[#12091f]
          to-[#080510]
          shadow-[0_0_60px_rgba(139,92,246,0.25)]
          flex
          items-center
          justify-center
          p-8
          overflow-hidden
        "
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <div className="text-center w-full">

          <div
            className="
              text-purple-300
              text-xs
              tracking-[0.3em]
              font-medium
            "
          >
            ✦ {card.title} ✦
          </div>

          <h1
            className="
              mt-7
              text-4xl
              font-serif
              text-white
              leading-tight
              break-keep
            "
          >
            {card.name}
          </h1>

          <p
            className="
              mt-5
              mx-auto
              max-w-[220px]
              text-base
              leading-relaxed
              text-zinc-300
              break-keep
            "
          >
            {card.description}
          </p>

          <p
            className="
              mt-10
              text-xs
              tracking-wide
              text-purple-300/60
              break-keep
            "
          >
            {language === "en"
              ? "Tap to reveal ✦"
              : language === "ko"
                ? "탭해서 펼쳐보기 ✦"
                : "Kliknij, żeby odkryć ✦"}
          </p>

        </div>
      </div>

      {/* ================= BACK ================= */}

      <div
        className="
          absolute
          inset-0
          rounded-3xl
          border
          border-purple-400/50
          bg-gradient-to-br
          from-[#160b24]
          via-[#10071a]
          to-[#080510]
          shadow-[0_0_60px_rgba(139,92,246,0.25)]
          p-8
          flex
          flex-col
          justify-center
        "
        style={{
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
        }}
      >
        <p
          className="
            text-purple-300
            text-sm
            tracking-[0.3em]
            break-keep
          "
        >
          ✦ REVEALED ✦
        </p>

        <h2
          className=
          {`
            font-serif
            text-white
            mt-3
            break-keep
            ${language === "ko" ? "font-bold" : ""}
             ${language === "ko" ? "text-[1.3rem]" : "text-[1.3rem]"}`}
        >
          {card.back.heading}
        </h2>

        <p
          className="
            text-zinc-400
            mt-4
            leading-relaxed
          "
        >
          {card.back.description}
        </p>

        {card.back.links && (
          <div className="mt-6 space-y-3">
            {card.back.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                onPointerDown={(e) => e.stopPropagation()}
                onPointerUp={(e) => e.stopPropagation()}
                onClick={(e) => e.stopPropagation()}
                className="
                  relative
                  z-50
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-purple-400/20
                  bg-purple-950/30
                  px-4
                  py-3
                  text-sm
                  text-purple-200
                  backdrop-blur-sm
                  transition-all
                  hover:border-purple-400/40
                  hover:bg-purple-900/30
                  active:scale-[0.98]
                  touch-manipulation
                "
              >
                {link.label}
                <span>✦</span>
              </a>
            ))}
          </div>
        )}

        <p
          className="
            mt-8
            text-xs
            text-purple-400/40
          "
        >
          {language === "en"
            ? "Swipe to draw another card"
            : language === "ko"
              ? "스와이프해서 다음 카드 보기"
              : "Przesuń, aby wylosować kolejną kartę"}
        </p>
      </div>
    </motion.div>
  );
}