import React from "react";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { BsBriefcaseFill } from "react-icons/bs";
import PagesMetaHead from "@/components/PagesMetaHead";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const ResumData = [
  {
    Id: 1,
    position: "مساعد مدير المكتب للشؤون التعليمية",
    Place: "",
    Description:
      "مكتب التعليم بمحافظة الرين –  إدارة التعليم بمحافظة القويعية.",
    Start: "2019",
    EndJob: "حالياً",
    location: null,
    image: null,
  },

  {
    Id: 2,
    position: "عضو لجنة التنمية المحلية ",
    Place: "",
    Description:
      "عضو لجنة التنمية المحلية بمحافظة الرين – وزارة الموارد البشرية والتنمية الاجتماعية ",
    Start: "2018",
    EndJob: "2020",
    location: null,
    image: null,
  },
  {
    Id: 3,
    position: "مشرف تربوي ",
    Place: "",
    Description:
      "مشرف تربوي لمادة الحاسب الآلي بمكتب التعليم بمحافظة الرين - إدارة التعليم بمحافظة القويعية",
    Start: "2017",
    EndJob: "2019",
    location: null,
    image: null,
  },
  {
    Id: 4,
    position: "معلم حاسب آلي",
    Place: "",
    Description: "وزارة التعليم – إدارة التعليم بمحافظة القويعية ",
    Start: "2011",
    EndJob: "2017",
    location: null,
    image: null,
  },
  {
    Id: 5,
    position: "مبرمج حاسب آلي ",
    Place: "شركة السلام للطائرات",
    Description:
      "شركة متعاقدة مع القوات الجوية الملكية السعودية – مشروع برنامج المساندة الفنية لطائرات F-15.",
    Start: "2010",
    EndJob: "2011",
    location: null,
    image: null,
  },
  {
    Id: 6,
    position: " مهندس حاسب آلي ",
    Place: "شركة الإلكترونيات المتقدمة SAMI ",
    Description:
      "شركة متعاقدة مع القوات الجوية الملكية السعودية – مشروع برنامج المساندة الفنية لطائرات F-15.",
    Start: "2008",
    EndJob: "2010",
    location: null,
    image: null,
  },
  {
    Id: 7,
    position: "اخصائي نظم معلومات ",
    Place: "القوات الجوية الملكية السعودية ",
    Description: "القوات الجوية الملكية السعودية –هيئة إدارة القوات الجوية ",
    Start: "2007",
    EndJob: "2008",
    location: null,
    image: null,
  },
  {
    Id: 8,
    position: "اخصائي تقنية معلومات",
    Place: "الشركة الوطنية لصناعة البطاريات NBC ",
    Description:
      "الشركة الوطنية لصناعة البطاريات NBC  احدى شركات شركة التصنيع الوطنية ",
    Start: "2006",
    EndJob: "2007",
    location: null,
    image: null,
  },
];
const experience = () => {
  return (
    <>
      <PagesMetaHead title="الخبرات المهنية" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="flex items-center justify-center p-3 m-4 ltr:justify-end w-fit justify-items-center"
      >
        <ol className="relative border-r-2 border-gray-300 dark:border-gray-700">
          {" "}
          {ResumData.map((value, i) => (
            <li key={i} className="mb-10 mr-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -right-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                <BsBriefcaseFill className="w-6 h-6 text-blue-800 dark:text-blue-300">
                  {" "}
                </BsBriefcaseFill>{" "}
              </span>{" "}
              <h3
                className="flex items-center mb-1 font-[Almarai]
                text - lg font - semibold text - gray - 900 dark: text - white "
              >
                {value.position}{" "}
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                  {" "}
                  {value.Start} - {value.EndJob}{" "}
                </span>{" "}
              </h3>
              <p className="mb-4 mt-2 text-base md:text-lg whitespace-pre-wrap font-[Cairo] font-normal text-gray-500 dark:text-gray-400">
                {" "}
                {value.Place && value.Place + " - "} {value.Description}{" "}
              </p>{" "}
            </li>
          ))}{" "}
        </ol>{" "}
      </motion.div>{" "}
    </>
  );
};

export default experience;
