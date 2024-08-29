import Image from "next/image";
import bannerIMG from "../image/cta-img.png";
import { FC } from "react";

interface IUniversalBannerProps {
  header: string;
}

const UniversalBanner: FC<IUniversalBannerProps> = ({ header }) => {
  return (
    <div className="universal-banner">
      <h1 className="universal-banner__title">{header}</h1>
      <Image src={bannerIMG} alt="banner" />
    </div>
  );
};

export default UniversalBanner;
