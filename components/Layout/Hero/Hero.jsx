import { staggerContainer, textVariant, zoomIn } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/legacy/image";
import { FiArrowDownCircle } from "react-icons/fi";
import Logo from "@/public/hero.jpg";
import { HeroHeadingTyping, TypingText } from "@/components/UI/CustomTexts";
import CustomImage from "@/components/UI/CustomImage";

const heroContent = {
  heroImage: "img/hero/dark.jpg",
  heroMobileImage: "img-mobile",
  heroTitleName: "محمد بن عبدالعزيز الهويمل",
  heroDesignation: "أب لـــ (ليان – عبدالعزيز – زياد - سعود - ديم)",
  heroDescriptions: `انطلقت رحلتي بست سنوات في عالم البرمجة ....
  ثم مثلها في محاضن التربية والتعليم معلماً......
  والآن منذ خمس سنوات وأنا أمارس دوري القيادي والإشرافي التعليمي......`,
  heroBtn: " Resume المزيد",
};

function Hero() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col items-center mt-5 sm:justify-between sm:flex-row md:mt-2"
      >
        <div className="w-full text-right md:text-right md:w-2/3">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="p-6 overflow-hidden text-center "
          >
            <p
              className="py-2 text-4xl font-[Rakkas] font-medium text-[#6936f5]
              md:text-5xl"
            >
              {heroContent.heroTitleName}
            </p>
            <motion.h3
              variants={textVariant(1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="py-2 text-xl tracking-tight md:text-3xl "
            >
              <TypingText title={heroContent.heroDesignation}></TypingText>
            </motion.h3>
            <motion.p
              variants={textVariant(1.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="max-w-xl py-5 mx-auto leading-8 font-[Lateef] tracking-wider 
              text-2xl text-slate-600 dark:text-slate-500 md:text-3xl"
            >
              {heroContent.heroDescriptions}
            </motion.p>
          </motion.div>
        </div>
        <div className="w-full text-center md:w-1/3 md:text-right">
          <motion.div
            variants={zoomIn(0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="relative mx-auto mt-10 overflow-hidden rounded-full shadow-xl h-52 w-52 bg-gradient-to-b from-teal-500 md:h-96 md:w-96"
          >
            <CustomImage
              alt="image"
              src="/hero.jpg"
              layout="fill"
              className="transition-all duration-500 hover:scale-110"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}
export default Hero;
