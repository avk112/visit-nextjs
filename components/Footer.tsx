"use client";

import { useState } from "react";
import arrowImg from "../image/next.png";
import facebook from "../image/facebook-app-symbol.png";
import twitter from "../image/twitter.png";
import instagram from "../image/instagram.png";
import FormAcceptation from "./FormAcceptation";
import HiddenScreen from "./HiddenScreen";
import { useDispatch, useSelector } from "react-redux";
import { switchVisible } from "../redux/hiddenScreensSlice";
import Image from "next/image";
import { RootState } from "@/redux/store";

const Footer = () => {
  const dispatch = useDispatch();
  const hiddenScreenStatus = useSelector((state: RootState) => state.hiddenScreens.mailAcceptance);
  const socialIcons = [facebook, twitter, instagram];
  const [formData, setFormData] = useState("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setFormData(value);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData("");
    handleHiddenScreen();
  };

  const handleHiddenScreen = () => {
    dispatch(switchVisible("mailAcceptance"));
  };

  const socialBlock = socialIcons.map((item, index) => {
    return (
      <div key={index} className="footer__bottom__social__item">
        <Image src={item} alt="social media" />
      </div>
    );
  });

  return (
    <div className="footer">
      <HiddenScreen
        justify="center"
        insertBlock={<FormAcceptation message="Thank you for your trust! We won't be annoying!" />}
        isVisible={hiddenScreenStatus}
        handleScreenStatus={handleHiddenScreen}
      />
      <div className="footer__row">
        <div className="footer_row__about">
          <h4>About Us</h4>
          <p>
            The state of Utah in the United States is home to lots of beautiful National Parks, & Bryce Canyon National Park ranks as three of the
            magnificent & awe inspiring.
          </p>
        </div>
        <div className="footer_row__contacts">
          <h4>Contact US</h4>
          <p>56/8, rockybeach road, santa monica, Los angeles, California - 59620.</p>
          <a href="tel: 012-6532-568-9746">012-6532-568-9746</a>
          <a href="tel: 012-6532-569-9748">012-6532-569-9748</a>
        </div>
        <div className="footer_row__newsletter">
          <h4>Newsletter</h4>
          <p>You can trust us. we only send offers, not a single spam.</p>
          <form onSubmit={sendMessage}>
            <input type="text" placeholder="Your Email address" value={formData} onChange={handleInput} />
            <button>
              <Image src={arrowImg} alt="newsletter" />
            </button>
          </form>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Copyright ©2022 All rights reserved | This template is made as a demonstration</p>
        <div className="footer__bottom__social">{socialBlock}</div>
      </div>
    </div>
  );
};

export default Footer;
