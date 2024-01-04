import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const MobileMenu = ({ showSubMenu, setShowSubMenu, setMobileMenu }) => {
  const menuData = [
    { id: 1, name: "عــني", url: "/" },
    { id: 2, name: "الخبرات المهنية", url: "/experience" },
    { id: 3, name: "أعمـالي", url: "/portfolio" },
    { id: 4, name: "تـواصل", url: "/contact" },
  ];

  return (
    <ul
      className="flex flex-col pt-2 md:hidden  absolute top-[50px] 
    right-0 w-full h-[calc(100vh-50px)]  bg-white border-t text-black"
    >
      {menuData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className="relative flex flex-col px-5 py-4 border-b cursor-pointer"
                onClick={() => setShowSubMenu(!showSubMenu)}
              >
                <div className="flex items-center justify-between">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>
                {/* {showSubMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4 px-5">
                    {data?.[0]?.map((item) => {
                      return (
                        <Link
                          key={item._id}
                          href={`/categories/${item.slug.current}`}
                        >
                          <li
                            className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md"
                            onClick={() => {
                              setShowSubMenu(false);
                              setMobileMenu(false);
                            }}
                          >
                            {item.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )} */}
              </li>
            ) : (
              <li
                className="px-5 py-4 transition duration-200 ease-in-out border-b hover:scale-105"
                onClick={() => setMobileMenu(false)}
              >
                <Link className="font-[Changa] text-base " href={item.url}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileMenu;
