import classes from "./CtaArea.module.css";
import ctaImg from "../../../image/cta-img.png";
import { useDispatch } from "react-redux";
import { switchVisible } from "../../../redux/hiddenScreensSlice";
import Image from "next/image";

const CtaArea = () => {
  const dispatch = useDispatch();

  const handleHiddenScreen = () => {
    dispatch(switchVisible("form"));
  };

  return (
    <div className={classes.ctaArea}>
      <h1 className="universal-container__header">Huge Transaction in last Week</h1>
      <p className="universal-container__subheader">
        Thinking about overseas adventure travel? Have you put any thought into the best places to go when it comes to overseas adventure travel?
      </p>
      <Image src={ctaImg} alt="cta" />
      <button onClick={handleHiddenScreen}>Become a member</button>
    </div>
  );
};

export default CtaArea;
