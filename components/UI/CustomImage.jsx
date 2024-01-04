import Image from "next/legacy/image";
import React from "react";

function CustomImage({ alt, ...props }) {
  const [src, setSrc] = React.useState(props.src);
  const [s, setM] = React.useState(props.src);

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      onError={() => setSrc("/images/notImg.jpg") + setM(true)}
      placeholder="blur"
      blurDataURL="/images/notImg.jpg"
    />
  );
}

export default CustomImage;
