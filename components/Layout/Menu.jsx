import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const Menu = ({ showSubMenu, setShowSubMenu }) => {
  const menuData = [
    { id: 1, name: "عــني", url: "/" },
    { id: 2, name: "الخبرات المهنية", url: "/experience" },
    { id: 3, name: "أعمـالي", url: "/portfolio" },
    { id: 4, name: "تـواصل", url: "/contact" },
  ];

  return (
    <ul className="items-center hidden gap-8 text-lg font-bold text-black md:flex">
      {menuData?.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {item?.subMenu ? (
              <li
                className="relative flex items-center gap-2 cursor-pointer "
                onMouseEnter={() => setShowSubMenu(true)}
                onMouseLeave={() => setShowSubMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {/* {showSubMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] p-1 text-black shadow-lg">
                    {data?.[0]?.map((item) => {
                      return (
                        <Link
                          key={item._id}
                          href={`/categories/${item.slug.current}`}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                            {item.name}
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )} */}
              </li>
            ) : (
              <li className="transition duration-300 ease-in-out cursor-pointer hover:scale-110">
                <Link className="font-[Almarai]" href={item.url}>
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

export default Menu;
