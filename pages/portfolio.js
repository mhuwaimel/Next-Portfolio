import PagesMetaHead from "@/components/PagesMetaHead";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import React from "react";
import { motion } from "framer-motion";
const portfolio = () => {
  return (
    <>
      <PagesMetaHead title="معرض الأعمال" />
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 0.5,
            delay: 0.1,
          }}
          className="flex flex-col-reverse py-5 mx-auto lg:flex-row"
        >
          <ProjectsGrid></ProjectsGrid>
        </motion.div>
      </div>
    </>
  );
};

export default portfolio;
