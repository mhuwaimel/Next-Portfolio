"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2, textVariant } from "@/utils/animation";

export const HeroHeadingTyping = ({ title, textStyles }) => (
  <motion.h1
    variants={textContainer}
    className={`py-2 text-4xl font-medium text-[#6936f5] dark:text-teal-400 md:text-5xl ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.h1>
);

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`text-secondary-white font-[Changa] text-xl md:text-3xl font-light ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles, delay }) => (
  <motion.h2
    variants={textVariant(delay)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className={`mt-[8px] font-bold ${textStyles}`}
  >
    {title}
  </motion.h2>
);
