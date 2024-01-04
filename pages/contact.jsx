import PagesMetaHead from "@/components/PagesMetaHead";

import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { GoMail } from "react-icons/go";
import Contact from "@/components/UI/Contact/Contact";

function contact() {
  return (
    <div>
      <PagesMetaHead title="اتصل" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "circOut",
          duration: 0.5,
          delay: 0.1,
        }}
        className="flex flex-col-reverse py-5 mx-auto lg:flex-row"
      >
        <Contact></Contact>
      </motion.div>
    </div>
  );
}

export default contact;
