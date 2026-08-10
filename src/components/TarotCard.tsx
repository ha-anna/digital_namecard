"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { cards } from "@/data/cards";
import TarotCardFace from "./TarotCardFace";

export default function TarotCard() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(1);
  const [language, setLanguage] = useState<"en" | "ko" | "pl">("en");

  function drawCard(direction: number) {
    if (isLeaving) return;

    setSwipeDirection(direction);
    setIsLeaving(true);

    setTimeout(() => {
      setIndex((prev) => (prev + 1) % cards.length);
      setFlipped(false);
      setIsLeaving(false);
    }, 500);
  }

  function handleDragEnd(
    _: MouseEvent | TouchEvent | PointerEvent,
    info: {
      offset: { x: number; y: number };
      velocity: { x: number; y: number };
    }
  ) {
    setIsDragging(false);

    if (isLeaving) return;

    const { x, y } = info.offset;
    const { x: velocityX, y: velocityY } = info.velocity;

    const distanceThreshold = 70;
    const velocityThreshold = 400;

    const horizontalSwipe =
      Math.abs(x) > distanceThreshold ||
      Math.abs(velocityX) > velocityThreshold;

    const verticalSwipe =
      Math.abs(y) > distanceThreshold ||
      Math.abs(velocityY) > velocityThreshold;

    if (!horizontalSwipe && !verticalSwipe) {
      return;
    }

    let direction = 1;

    if (Math.abs(x) >= Math.abs(y)) {
      direction =
        x >= 0 || velocityX >= 0
          ? 1
          : -1;
    } else {
      direction =
        y >= 0 || velocityY >= 0
          ? 1
          : -1;
    }

    drawCard(direction);
  }

  return (
    <div className="flex flex-col items-center">

      {/* ================= DECK ================= */}

      <motion.div
        className="
          relative
          w-72
          h-[420px]
          [perspective:1000px]
        "
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

        {/* ================= GLOW ================= */}

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
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* ================= DECK ================= */}

        {cards.map((_, i) => {
          const distance =
            (i - index + cards.length) %
            cards.length;

          if (distance > 3) {
            return null;
          }

          const card = cards[i][language];
          const isActive = distance === 0;

          return (
            <motion.div
              key={i}
              className="
                absolute
                inset-0
                rounded-3xl
                shadow-[0_0_60px_rgba(139,92,246,0.25)]
              "
              style={{
                zIndex: 100 - distance,
                transformStyle: "preserve-3d",
              }}

              animate={{
                y:
                  isLeaving && distance === 1
                    ? 0
                    : distance * -10,

                scale:
                  isLeaving && distance === 1
                    ? 1
                    : 1 - distance * 0.035,

                rotateZ:
                  isLeaving && distance === 1
                    ? 0
                    : distance * -1,
              }}

              transition={{
                duration:
                  isLeaving && distance === 1
                    ? 0.5
                    : 0.5,

                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* ================= CARD ================= */}

              <motion.div
                className="
                  absolute
                  inset-0
                  touch-none
                "
                drag={isActive && !isLeaving}
                dragElastic={0.35}
                dragMomentum={false}

                whileDrag={
                  isActive
                    ? {
                      scale: 1.04,
                      rotateZ: 2,
                    }
                    : undefined
                }

                animate={
                  isActive && isLeaving
                    ? {
                      x: swipeDirection * 600,
                      y: -80,
                      rotateZ: swipeDirection * 20,
                      opacity: 0,
                      scale: 0.9,
                    }
                    : {
                      x: 0,
                      y: 0,
                      rotateZ: 0,
                      opacity: 1,
                      scale: 1,
                    }
                }

                transition={{
                  duration: isActive && isLeaving ? 0.5 : 0.2,
                  ease: isLeaving
                    ? [0.22, 1, 0.36, 1]
                    : "easeOut",
                }}

                onDragStart={() => {
                  if (isActive) {
                    setIsDragging(true);
                  }
                }}

                onDragEnd={
                  isActive
                    ? handleDragEnd
                    : undefined
                }

                onTap={() => {
                  if (
                    isActive &&
                    !isDragging &&
                    !isLeaving
                  ) {
                    setFlipped((prev) => !prev);
                  }
                }}
              >

                <TarotCardFace
                  card={card}
                  flipped={
                    isActive
                      ? flipped
                      : false
                  }
                  language={language}
                />

              </motion.div>

            </motion.div>
          );
        })}

      </motion.div>

      {/* ================= LANGUAGE ================= */}

      <button
        type="button"
        onClick={() =>
          setLanguage((prev) => prev === "en" ? "ko" : prev === "ko" ? "pl" : "en")
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
          active:scale-95
        "
      >
        {language === "en"
          ? "한국어"
          : language === "ko"
            ? "PL"
            : "EN"}
      </button>

    </div>
  );
}