"use client";

import BannerArea from "../components/homepage/BannerArea/BannerArea";
import AboutArea from "../components/homepage/AboutArea/AboutArea";
import FeatureArea from "../components/homepage/FeatureArea/FeatureArea";
import ScheduleArea from "../components/homepage/ScheduleArea/ScheduleArea";
import FeedbackArea from "../components/homepage/FeedbackArea/FeedbackArea";
import CtaArea from "../components/homepage/CtaArea/CtaArea";
import BlogArea from "../components/homepage/BlogArea/BlogArea";

import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <BannerArea />
      <AboutArea />
      <FeatureArea />
      <ScheduleArea />
      <FeedbackArea />
      <CtaArea />
      <BlogArea />
    </>
  );
}
