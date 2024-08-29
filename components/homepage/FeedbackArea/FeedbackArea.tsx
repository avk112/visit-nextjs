import { useEffect, useState } from "react";
import classes from "./FeedbackArea.module.css";
import feedbackData from "../../../data/homepage/feedback";
import Image from "next/image";

interface Block {
  id: number;
  isActive: boolean;
  coordinates: string;
}

const FeedbackArea = () => {
  const [carrouselWidth, setCarrouseleWidth] = useState<number>(0);
  const [position, setPosition] = useState<number | string>(0);
  const [blockStatus, setBlockStatus] = useState<Block[]>([]);
  const [moveStart, setMoveStart] = useState({
    x: 0,
    time: 0,
  });

  const initializeCarrousele = (newWidth: number) => {
    let activeBlock = [];
    for (let i = 0; i < newWidth; i++) {
      activeBlock.push({
        id: i + 1,
        isActive: false,
        coordinates: `${i * -100}%`,
      });
    }
    activeBlock[0].isActive = true;
    return activeBlock;
  };

  const handleResize = () => {
    const newCarouseleWidth = window.screen.width > 540 ? feedbackData.length / 3 : feedbackData.length;

    setPosition(0);
    setCarrouseleWidth(newCarouseleWidth);
    setBlockStatus(initializeCarrousele(newCarouseleWidth));
  };

  const startSwiping = (e: React.TouchEvent<HTMLDivElement>) => {
    setMoveStart({
      x: e.touches[0].clientX,
      time: e.timeStamp,
    });
  };

  const endSwiping = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const endTime = e.timeStamp;
    let nextBlockId;

    if (endTime - moveStart.time <= 500) {
      const currentBlockId = blockStatus.find((item) => item.isActive === true)?.id || 0;
      const maxLength = blockStatus.length;
      if (endX - moveStart.x >= 10) {
        nextBlockId = currentBlockId === 1 ? 1 : currentBlockId - 1;
        moveSlide(nextBlockId);
      }
      if (endX - moveStart.x <= -10) {
        nextBlockId = currentBlockId === maxLength ? maxLength : currentBlockId + 1;
        moveSlide(nextBlockId);
      }
    }
  };

  const moveSlide = (id: number) => {
    const Id = Number(id);
    const newPosition = blockStatus.find((item) => item.id === Id)?.coordinates || 0;
    const newBlockStatus = blockStatus.map((block) => {
      return block.id === Id ? { ...block, isActive: true } : { ...block, isActive: false };
    });

    setPosition(newPosition);
    setBlockStatus(newBlockStatus);
  };

  const feedbackBlock = feedbackData.map((item) => {
    return (
      <div key={item.id} className={classes.feedbackArea__row__container__item} onTouchStart={startSwiping} onTouchEnd={endSwiping}>
        <Image src={item.img} alt="feedback" />
        <p>{item.text}</p>
        <h4 className={classes.feedbackArea__row__container__item__title}>{item.title}</h4>
        <h5 className={classes.feedbackArea__row__container__item__subtitle}>{item.subtitle}</h5>
      </div>
    );
  });

  const buttonsBlock = blockStatus.map((item) => {
    return (
      <button
        key={item.id}
        className={`${classes.feedbackArea__row__buttonBlock__btn} ${item.isActive ? classes.activeBtn : undefined}`}
        onClick={(e) => moveSlide(item.id)}
      ></button>
    );
  });

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${classes.feedbackArea} universal-container`}>
      <h1 className="universal-container__header">Client’s Feedback</h1>
      <p className="universal-container__subheader">
        As you pour the first glass of your favorite Chianti or Chardonnay and settle into an intimate Friday evening.
      </p>
      <div className={classes.feedbackArea__row}>
        <div className={classes.feedbackArea__row__container} style={{ left: position, width: `${carrouselWidth * 100}%` }}>
          {feedbackBlock}
        </div>
        <div className={classes.feedbackArea__row__buttonBlock}>{buttonsBlock}</div>
      </div>
    </div>
  );
};

export default FeedbackArea;
