"use client";

import { FC, ReactNode, useRef } from "react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Control del progreso del scroll
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Separa el texto en palabras
  const words = text.split(" ");

  return (
    <div ref={targetRef} className="relative z-0 h-[200vh]">
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-10">
        <p ref={targetRef} className={cn("flex flex-wrap", className)}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  // Inicia con "#212121" (text-dark) y termina en "#1200C4"
  const color = useTransform(progress, range, ["#212121", "#1200C4"]);
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-2.5">
      {/* Texto de fondo, semitransparente (opcional) */}
      <span className="absolute opacity-30">{children}</span>
      {/* Texto principal animado */}
      <motion.span style={{ color, opacity }}>{children}</motion.span>
    </span>
  );
};

export default TextRevealByWord;
