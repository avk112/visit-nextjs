"use client";

import AboutArea from "../../components/homepage/AboutArea/AboutArea";
import FeedbackArea from "../../components/homepage/FeedbackArea/FeedbackArea";
import { useEffect } from "react";
import UniversalBanner from "../../components/UniversalBanner";

const AboutPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <UniversalBanner header="About Us" />
      <AboutArea />
      <FeedbackArea />
    </>
  );
};

export default AboutPage;
