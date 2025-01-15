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
  // Referencia para el scroll
  const targetRef = useRef<HTMLDivElement | null>(null);

  // Hook para controlar el progreso del scroll
  const { scrollYProgress } = useScroll({ target: targetRef });

  // Separa el texto en palabras
  const words = text.split(" ");

  return (
    // Contenedor general (con altura extra para efecto de scroll)
    <div ref={targetRef} className="relative z-0 h-[200vh]">
      {/* Contenedor sticky que mantiene la posición del texto en la mitad superior */}
      <div className="sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-4 py-10">
        {/* Aplica las clases que quieras directamente con 'className' */}
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

/**
 * Componente que anima cada palabra individualmente.
 * Se incrementa la opacidad de 0 a 1 entre los valores [start, end].
 */
const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative mx-1 lg:mx-2.5">
      {/* Texto de fondo, semitransparente (opcional, puedes quitarlo si no lo deseas) */}
      <span className="absolute opacity-30">{children}</span>

      {/* Texto principal animado con Motion */}
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
