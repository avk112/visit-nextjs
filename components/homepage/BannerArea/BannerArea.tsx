import classes from "./BannerArea.module.css";
import bannerImg from "../../../image/banner-img.png";
import { switchVisible } from "../../../redux/hiddenScreensSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";

const BannerArea = () => {
  const dispatch = useDispatch();

  const handleHiddenScreen = () => {
    dispatch(switchVisible("form"));
  };

  return (
    <div className={classes.bannerArea}>
      <div className={classes.bannerArea__imgBlock}>
        <Image src={bannerImg} alt="banner" />
      </div>
      <div className={classes.bannerArea__descriptionBlock}>
        <h1 className={classes.bannerArea__descriptionBlock__h1}>
          <span>Yogaflex</span> to shape your body
        </h1>
        <button className={classes.bannerArea__descriptionBlock__btn} onClick={handleHiddenScreen}>
          Become a Member
        </button>
      </div>
    </div>
  );
};

export default BannerArea;
