"use client";

import { useState, useEffect } from "react";

import blogsData from "../../../data/homepage/blog";
import classes from "../BlogPage.module.css";
import heartImg from "../../../image/heart.png";
import heartRedImg from "../../../image/heart-red.png";
import { useParams } from "next/navigation";
import Image from "next/image";

const SingleBlog = () => {
  const d = new Date();
  class Comment {
    id: number;
    author: string;
    date: string;
    text: string;

    constructor(id = 999, text = "", author = "Guest", date = `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`) {
      this.id = id;
      this.author = author;
      this.date = date;
      this.text = text;
    }
  }

  const { id } = useParams();

  const blogId = Number(id);
  const blog = blogsData.find((item) => item.id === blogId);
  const [blogToShow, setBlogToShow] = useState(blog);
  const [heart, setHeart] = useState(heartImg);
  const [isLiked, setIsLiked] = useState(false);
  const [userComment, setUserComment] = useState("");

  const handleLike = () => {
    if (isLiked) {
      setHeart(heartImg);
      setIsLiked(false);
      setBlogToShow((prev: any) => ({ ...prev, likes: prev.likes - 1 }));
    } else {
      setHeart(heartRedImg);
      setIsLiked(true);
      setBlogToShow((prev: any) => ({ ...prev, likes: prev.likes + 1 }));
    }
  };

  const handleUserComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.target.value;
    setUserComment(comment);
  };

  const addUserComment = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newComment = new Comment((blogToShow?.comments?.length || 1) + 1, userComment);
    setBlogToShow((prev: any) => ({ ...prev, comments: [...prev.comments, newComment] }));
    setUserComment("");
  };

  const commentsBlock = blogToShow?.comments?.map((item) => {
    return (
      <div key={item.id} className={classes.singleBlock__commentsBlock}>
        <h5 className={classes.singleBlock__commentsBlock__title}>{item.author}</h5>
        <p className={classes.singleBlock__commentsBlock__date}>{item.date}</p>
        <p>{item.text}</p>
      </div>
    );
  });

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className={classes.singleBlock}>
      <h1 className={classes.singleBlock__title}>{blogToShow?.title}</h1>
      <Image className={classes.singleBlock__img} src={blogToShow?.img || ""} alt="blog image" />
      <p className={classes.singleBlock__date}>{blogToShow?.date}</p>
      <p>{blogToShow?.text}</p>
      <div className={classes.singleBlock__likesBlock}>
        <Image src={heart} onClick={handleLike} alt="blog image" />
        <p>{blogToShow?.likes}</p>
      </div>
      <h3 className={classes.singleBlock__commentsTitle}>Comments:</h3>
      {commentsBlock}
      <h3 className={classes.singleBlock__commentsTitle}>Add Your Comment:</h3>
      <form className={classes.singleBlock__commentsForm}>
        <textarea placeholder="Start typing your comment" maxLength={400} value={userComment} onChange={handleUserComment} />
        <button onClick={addUserComment}>Send</button>
      </form>
    </div>
  );
};

export default SingleBlog;
