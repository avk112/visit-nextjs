"use client";

import { useEffect, useState } from "react";
import classes from "../../components/homepage/BlogArea/BlogArea.module.css";
import pageClasses from "./BlogPage.module.css";
import blogData from "../../data/homepage/blog";
import calendarImg from "../../image/calendar.png";
import likeImg from "../../image/heart.png";
import commentImg from "../../image/speech-bubble.png";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const AllBlogs = () => {
  const pathname = usePathname();
  const blogsArray = [...blogData];
  const sortedData = blogsArray.sort((a, b) => {
    return b.id - a.id;
  });

  const [page, setPage] = useState<any[]>([]);
  const [currentPageId, setCurrentPageId] = useState(1);
  const pageLimit = 3;
  const pagesTotal = Math.ceil(sortedData.length / pageLimit);

  const selectPageToShow = (number: number) => {
    let array = [];
    const firstBlog = pageLimit * (number - 1) + 1;
    const lastBlog = pageLimit * number;

    for (let i = firstBlog - 1; i <= lastBlog - 1; i++) {
      sortedData[i] && array.push(sortedData[i]);
    }
    setCurrentPageId(number);
    return setPage(array);
  };

  const blogsBlock = page.map((item) => {
    return (
      <div key={item.id} className={classes.blogArea__row__item}>
        <Link href={`${pathname}/${item.id}`}>
          <div className={classes.blogArea__row__item__imgContainer}>
            <Image src={item.img} alt="blog image" />
          </div>
          <h4 className={classes.blogArea__row__item__title}>{item.title}</h4>
          <p>{item.subtitle}</p>
          <div className={classes.blogArea__row__item__infoBlock}>
            <div className={classes.blogArea__row__item__infoBlock__section}>
              <Image src={calendarImg} alt="blog image" />
              {item.date}
            </div>
            <div className={classes.blogArea__row__item__infoBlock__section}>
              <Image src={likeImg} alt="blog image" />
              {item.likes}
            </div>
            <div className={classes.blogArea__row__item__infoBlock__section}>
              <Image src={commentImg} alt="blog image" />
              {item.comments.length}
            </div>
          </div>
        </Link>
      </div>
    );
  });

  const buttonsBlock = () => {
    let btnsArray = [];
    for (let i = 1; i <= pagesTotal; i++) {
      btnsArray.push(
        <button key={i} className={currentPageId === i ? pageClasses.activeBtn : pageClasses.passiveBtn} onClick={() => selectPageToShow(i)}>
          {" "}
        </button>
      );
    }

    return btnsArray;
  };

  useEffect(() => {
    window.scroll(0, 0);
    selectPageToShow(1);
  }, []);

  return (
    <>
      <div className={classes.blogArea__row}>{blogsBlock}</div>
      <div className={pageClasses.buttonsBlock}>{buttonsBlock()}</div>
    </>
  );
};

export default AllBlogs;
