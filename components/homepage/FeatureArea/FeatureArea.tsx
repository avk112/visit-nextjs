import React from "react";
import classes from "./FeatureArea.module.css";
import featureData from "../../../data/homepage/feature";
import { useDispatch } from "react-redux";
import { switchVisible } from "../../../redux/hiddenScreensSlice";
import Image from "next/image";

const FeatureArea = () => {
  const dispatch = useDispatch();

  const handleHiddenScreen = () => {
    dispatch(switchVisible("form"));
  };

  const featureRow = featureData.map((item) => {
    return (
      <div key={item.id} className={classes.featureArea__row__item}>
        <div className={classes.featureArea__row__item__imgBlock}>
          <Image src={item.img} alt="feature" />
        </div>
        <h4 className={classes.featureArea__row__item__title}>{item.title}</h4>
        <h5 className={classes.featureArea__row__item__book} onClick={handleHiddenScreen}>
          Book an appointment
        </h5>
      </div>
    );
  });

  return (
    <div className={`${classes.featureArea} universal-container`}>
      <h1 className="universal-container__header">Our Featured Classes</h1>
      <p className="universal-container__subheader">
        As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.
      </p>
      <div className={classes.featureArea__row}>{featureRow}</div>
    </div>
  );
};

export default FeatureArea;
