import React, { Component, useState } from "react";
import Head from "next/head";

import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/NavBar";
import { AnimatePresence, domAnimation, LazyMotion, m } from "framer-motion";
import { useRouter } from "next/router";
import { animations } from "@/utils/animations";
import AnimSwitcher from "@/utils/AnimSwitcher";

const variants = {
  out: {
    opacity: 0,
    transition: {},
  },
  in: {
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};
const Layout = ({ children }) => {
  const startIndex = 0;
  const [animation, setAnimation] = useState(animations[startIndex]);
  const [exitBefore, setExitBefore] = useState(false);
  const router = useRouter();

  return (
    <div dir="rtl" className="px-1 w-fill sm:px-10">
      <Head>
        <title>محمد الهويمل</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="sticky top-0 z-10 ">
        <Navbar />
      </header>

      <LazyMotion features={domAnimation}>
        <AnimatePresence mode={!exitBefore}>
          <m.div
            key={router.route.concat(animation.name)}
            className="page-wrap"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation.variants}
            transition={animation.transition}
          >
            <div className="relative main-container">{children}</div>
          </m.div>
        </AnimatePresence>
      </LazyMotion>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
