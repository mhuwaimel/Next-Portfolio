import React from "react";
import WorkData from "@/data/WorkData";
import PagesMetaHead from "@/components/PagesMetaHead";

import { Galleria } from "primereact/galleria";

import { useState } from "react";
import { FcLink } from "react-icons/fc";
import Link from "next/link";

function Index(props) {
  const imgs = props.project.imgs;
  const [images, setImages] = useState(imgs);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.img}
        alt={item.id}
        key={item.id}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return <img src={item.img} alt={item.id} />;
  };
  const responsiveOptions = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  return (
    <div className="container mx-auto">
      <PagesMetaHead title={props.project.Title} />

      {/* Header */}
      <div>
        <p
          className="md:text-3xl font-bold text-right font-[Cairo] text-xl 
         text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"
        >
          {props.project.Title}
        </p>
      </div>
      <div className="mt-8 ">
        <div className="w-full ">
          {/* Single project client details */}
          <div className="mb-7">
            <p className="mb-2 text-2xl font-light tracking-tighter text-secondary-dark dark:text-secondary-light">
              {props.project.Description}
            </p>
          </div>
          <div className="mb-7">
            <p className="mb-2 text-2xl font-semibold font-general-regular text-ternary-dark dark:text-ternary-light">
              Tools &amp; Technologies
            </p>
            <div className="mb-7">
              <p className="flex mb-2 text-xl font-general-regular text-ternary-dark dark:text-ternary-light">
                {props.project.modalDetails[0].techStack}
                <Link
                  target="_blank"
                  className="mr-4 text-left"
                  href={props.project.WDate}
                >
                  <FcLink className="text-3xl font-extrabold "></FcLink>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div className="mt-12 mb-10 sm:mb-0">
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          item={itemTemplate}
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators
          circular
          showThumbnails={false}
        />
      </div>

      {/* Info */}
    </div>
  );
}
export async function getServerSideProps({ query }) {
  const { id } = query;
  return {
    props: {
      project: WorkData.filter((project) => project.id === id)[0],
    },
  };
}
export default Index;
