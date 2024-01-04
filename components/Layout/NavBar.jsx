import React, { useContext, useState } from "react";
import Link from "next/link";
import { CgMenuLeftAlt } from "react-icons/cg";
import { RiMailSendLine } from "react-icons/ri";
import { VscChromeClose } from "react-icons/vsc";
import Menu from "@/components/Layout/Menu";
import MobileMenu from "@/components/Layout/MobileMenu";
import { Tooltip } from "flowbite-react";

import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const sendMail = () => {
    const mailAdress = process.env.NEXT_PUBLIC_MY_CONTACT_EMAIL;
    const subject = encodeURIComponent("Mail from My Website");
    const link = `mailto:${mailAdress}?&subject=${subject}`;
    window.location.href = link;
  };
  const [showSubMenu, setShowSubMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <div className="w-full h-[50px] md:h-[80px] bg-[#ffffff] flex items-center justify-between px-8 transition-transform duration-300">
      <div className="flex items-center text-2xl text-gray-800 cursor-pointer">
        <Link href={"/"}>
          <img src="/logo32.png" alt="logo" className="h-[32] w-[32]" />
        </Link>
        <p
          className="mr-2 font-bold tracking-widest text-gray-900 rounded fill-current ltr:ml-2 dark:text-gray-100"
          style={{ fontFamily: "vibes", fontSize: "1.5rem" }}
          onClick={() => router.push("/")}
        >
          محمد الهويمل
        </p>
      </div>

      <Menu showSubMenu={showSubMenu} setShowSubMenu={setShowSubMenu} />

      {mobileMenu && (
        <MobileMenu
          showSubMenu={showSubMenu}
          setShowSubMenu={setShowSubMenu}
          setMobileMenu={setMobileMenu}
        />
      )}

      <div className="flex items-center gap-4 text-black">
        <Tooltip placement="top" trigger="hover" content="تواصل معي Contact">
          <div className="flex items-center gap-8 ">
            <button
              type="button"
              data-tooltip-target="tooltip-default"
              className="p-2 rounded-full contact-icon hover:bg-gray-200"
              onClick={sendMail}
            >
              <RiMailSendLine className="fill-[#6936f5]" />
            </button>
          </div>
        </Tooltip>

        <div
          className="w-10 md:w-24 h-10 md:h-24 rounded-full flex md:hidden 
        justify-center items-center hover:bg-black/[0.1] cursor-pointer relative -ml-2"
        >
          {mobileMenu ? (
            <VscChromeClose
              className="text-[20px]"
              onClick={() => setMobileMenu(false)}
            />
          ) : (
            <CgMenuLeftAlt
              className="text-[26px] "
              onClick={() => setMobileMenu(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
