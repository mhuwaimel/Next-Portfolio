import { motion } from "framer-motion";
import Image from "next/legacy/image";
import Link from "next/link";

const imageStyle = { maxWidth: "100%", height: "auto" };

const ProjectSingle = (props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link
        href="/projects/[id]"
        as={"/projects/" + props.id}
        aria-label="Single Project"
        passHref
      >
        <div className="mb-10 shadow-lg cursor-pointer rounded-xl hover:shadow-xl sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <Image
              src={props.Image}
              className="border-none rounded-t-xl"
              alt="Single Project"
              layout="responsive"
              width={100}
              height={100}
            />
          </div>
          <div className="px-4 py-6 text-center">
            <p className="mb-2 text-base font-general-medium text-ternary-dark dark:text-ternary-light">
              {props.Title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {props.modalDetails.techStack}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectSingle;
