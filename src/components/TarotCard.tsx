"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { cards } from "@/data/cards";

export default function TarotCard() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [language, setLanguage] = useState<"en" | "ko">("en");

  const card = cards[index][language];

  function drawCard() {
    setFlipped(false);
    setIndex((prev) => (prev + 1) % cards.length);
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) {
    setIsDragging(false);

    const threshold = 80;

    const swiped =
      Math.abs(info.offset.x) > threshold ||
      Math.abs(info.offset.y) > threshold;

    if (swiped) {
      drawCard();
    }
  }

  return (
    <div className="flex flex-col items-center">

      {/* Card */}
      <motion.div
        className="relative w-72 h-[420px] [perspective:1000px]"
        animate={{
          y: [-8, 8, -8],
          rotateZ: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* Magical glow */}
        <motion.div
          className="
            absolute
            inset-[-40px]
            rounded-full
            bg-purple-600/20
            blur-3xl
            pointer-events-none
          "
          animate={{
            opacity: [0.25, 0.6, 0.25],
            scale: [0.9, 1.15, 0.9],
            y: [-10, 10, -10],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Cards behind */}
        {cards
          .slice(index + 1)
          .concat(cards.slice(0, index))
          .slice(0, 3)
          .map((_, i) => (
            <motion.div
              key={i}
              className="
                absolute
                inset-0
                rounded-3xl
                border
                border-purple-500/20
                bg-[#10081a]
              "
              style={{
                zIndex: cards.length - i,
              }}
              animate={{
                y: -(i + 1) * 10,
                scale: 1 - (i + 1) * 0.035,
                rotateZ: (i + 1) * -1,
              }}
            />
          ))}

        {/* Active card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="absolute inset-0"
            style={{
              zIndex: 100,
              transformStyle: "preserve-3d",
            }}
            initial={{
              opacity: 0,
              y: 80,
              scale: 0.8,
              rotateZ: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              rotateZ: 0,
            }}
            exit={{
              opacity: 0,
              y: -200,
              scale: 1.15,
              rotateZ: 20,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 12,
            }}
            drag
            dragElastic={0.7}
            dragConstraints={{
              left: -100,
              right: 100,
              top: -100,
              bottom: 100,
            }}
            whileDrag={{
              scale: 1.05,
            }}
            onDragStart={() => {
              setIsDragging(true);
            }}
            onDragEnd={handleDragEnd}
            onTap={() => {
              if (!isDragging) {
                setFlipped((prev) => !prev);
              }
            }}
          >

            {/* Inner card */}
            <motion.div
              className="absolute inset-0"
              animate={{
                rotateY: flipped ? 180 : 0,
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
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
                }}
              >
                <div className="text-center w-full">

                  {/* Card type */}
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

                  {/* Name */}
                  <h1
                    className="
                      mt-7
                      text-4xl
                      font-serif
                      text-white
                      leading-tight
                    "
                  >
                    {card.name}
                  </h1>

                  {/* Description */}
                  <p
                    className="
                      mt-5
                      mx-auto
                      max-w-[220px]
                      text-base
                      leading-relaxed
                      text-zinc-300
                    "
                  >
                    {card.description}
                  </p>

                  {/* Hint */}
                  <p
                    className="
                      mt-10
                      text-xs
                      tracking-wide
                      text-purple-300/60
                    "
                  >
                    {language === "en"
                      ? "Tap to reveal ✦"
                      : "탭해서 펼쳐보기 ✦"}
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
                  transform: "rotateY(180deg)",
                }}
              >

                <p
                  className="
                    text-purple-300
                    text-sm
                    tracking-[0.3em]
                  "
                >
                  ✦ {language === "en" ? "REVEALED" : "REVEALED"} ✦
                </p>

                <h2
                  className="
                    text-2xl
                    font-serif
                    text-white
                    mt-6
                  "
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

                {/* Links */}
                <div className="mt-8 space-y-3">
                  {card.back.links?.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="
                        block
                        text-purple-300
                        hover:text-purple-200
                        transition-colors
                      "
                    >
                      {link.label}
                    </a>
                  ))}
                </div>

                {/* Hint */}
                <p
                  className="
                    mt-8
                    text-xs
                    text-purple-400/40
                  "
                >
                  {language === "en"
                    ? "Swipe to draw another card"
                    : "스와이프해서 다음 카드 보기"}
                </p>

              </div>

            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

       {/* Language switcher */}
      <button
        onClick={() =>
          setLanguage((prev) => (prev === "en" ? "ko" : "en"))
        }
        className="
          mt-10
          rounded-full
          border
          border-purple-400/30
          bg-purple-950/40
          px-4
          py-2
          text-xs
          tracking-widest
          text-purple-200
          backdrop-blur-sm
          transition
          hover:border-purple-300/50
          hover:bg-purple-900/40
        "
      >
        {language === "en" ? "한국어" : "EN"}
      </button>

    </div>
  );
}