import classes from "./AboutArea.module.css";
import aboutData from "../../../data/homepage/about";
import aboutImg from "../../../image/about-img.png";
import Image from "next/image";

const AboutArea = () => {
  const rowBlock = aboutData.map((item) => {
    return (
      <div key={item.id} className={classes.aboutArea__row__item}>
        <h4 className={classes.aboutArea__row__item__title}>{item.title}</h4>
        <p>{item.text}</p>
      </div>
    );
  });

  return (
    <div className={`${classes.aboutArea} universal-container`}>
      <h1 className="universal-container__header">How Yogaflex can change your life</h1>
      <p className="universal-container__subheader">
        As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.
      </p>
      <div className={classes.aboutArea__contentBlock}>
        <div className={classes.aboutArea__contentBlock__row}>{rowBlock}</div>
        <div className={classes.aboutArea__contentBlock__imgBlock}>
          <Image src={aboutImg} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default AboutArea;
