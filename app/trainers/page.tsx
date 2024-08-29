"use client";

import { useEffect } from "react";
import trainersData from "../../data/trainerspage/trainers";
import classes from "./TrainersPage.module.css";
import UniversalBanner from "../../components/UniversalBanner";
import Image from "next/image";

const TrainersPage = () => {
  const trainersBlock = trainersData.map((item) => {
    return (
      <div key={item.id} className={classes.trainersPage__row__item}>
        <div className={classes.trainersPage__row__item__rotationBlock}>
          <div className={classes.trainersPage__row__item__rotationBlock__background}>
            <h3 className={classes.trainersPage__row__item__rotationBlock__background__title}>{item.name}:</h3>
            <p>... {item.text}</p>
          </div>
          <Image src={item.img} alt={`trainer ${item.name}`} />
        </div>
        <h3 className={classes.trainersPage__row__item__title}>{item.name}</h3>
        <h4 className={classes.trainersPage__row__item__subtitle}>{item.position}</h4>
      </div>
    );
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <UniversalBanner header="Our Trainers" />
      <div className="universal-container">
        <h1 className="universal-container__header">How Yogaflex can change your life</h1>
        <p className="universal-container__subheader">
          As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.
        </p>
        <div className={classes.trainersPage__row}>{trainersBlock}</div>
      </div>
    </>
  );
};

export default TrainersPage;
