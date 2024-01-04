import Link from "next/link";
import React from "react";

import { GrGithub, GrInstagram, GrLinkedinOption } from "react-icons/gr";

const Footer = () => {
  const instagramurl = process.env.NEXT_PUBLIC_MY_INSTAGRAM_URL;
  const linkedinurl = process.env.NEXT_PUBLIC_MY_LINKEDIN_URL;
  const githuburl = process.env.NEXT_PUBLIC_MY_GITHUB_URL;
  return (
    <div className="footer-container pt-12 sm:pt-30 pb-8 mt-10 border-t border-spacing-2 font-[Almarai]">
      <p className="icons">
        <Link
          target="_blank"
          href="https://sa.linkedin.com/in/mohammed-alhuwaimel"
        >
          <GrLinkedinOption className="text-xl font-bold text-cyan-600 hover:text-2xl hover:text-cyan-950" />
        </Link>
        <Link target="_blank" href="https://github.com/mhuwaimel">
          <GrGithub className="text-2xl font-bold hover:text-3xl" />
        </Link>
        <Link target="_blank" href="http://instagram.com/mhuwaimel">
          <GrInstagram className="text-2xl text-amber-700 hover:text-rose-900 hover:text-3xl" />
        </Link>
      </p>
    </div>
  );
};

export default Footer;
