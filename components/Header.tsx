"use client";

import { useEffect, useRef, useState } from "react";

import facebook from "../image/facebook-app-symbol.png";
import twitter from "../image/twitter.png";
import instagram from "../image/instagram.png";
import logo from "../image/logo.png";
import navData from "../data/header/navigation";
import menuIcon from "../image/menu-button-of-three-horizontal-lines.png";
import HiddenScreen from "./HiddenScreen";
import FormOrder from "./FormOrder";
import { useDispatch, useSelector } from "react-redux";
import { switchVisible } from "../redux/hiddenScreensSlice";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { RootState } from "@/redux/store";

const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const hiddenScreensStatus = useSelector((state: RootState) => state.hiddenScreens);
  const activeStyle: React.CSSProperties = { color: "#0093df" };
  const passiveStyle: React.CSSProperties = {};

  const scrollRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleHiddenScreen = (id: string) => {
    dispatch(switchVisible(id));
  };

  const visibleBackground = scroll > (scrollRef.current?.offsetTop ?? 0) ? "visible-background" : "hidden-background";

  const navBlock = (
    <ul>
      {navData.map((item) => {
        const isActive = (pathname.includes(item.link) && item.link !== "/") || pathname.endsWith(item.link);
        return (
          <li key={item.id}>
            <Link href={item.link} style={isActive ? activeStyle : passiveStyle}>
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  const menuBlock = <aside className="header__hidden-nav-block">{navBlock}</aside>;

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${visibleBackground}`}>
      <div className="header__top">
        <div className="header__top__social">
          <Image src={facebook} alt="facebook" />
          <Image src={twitter} alt="twitter" />
          <Image src={instagram} alt="instagram" />
        </div>
        <div className="header__top__contacts">
          <a href="tel:+880 1234 456 789">+880 1234 456 789</a>
          <button className="header__top__contacts__btn" onClick={() => handleHiddenScreen("form")}>
            Book Now
          </button>
        </div>
      </div>
      <div className="header__bottom">
        <div className="header__bottom__logo" ref={scrollRef}>
          <Image src={logo} alt="logo" />
        </div>
        <nav className="header__bottom__nav">{navBlock}</nav>
        <div className="header__bottom__menu">{<Image src={menuIcon} alt="menu" onClick={() => handleHiddenScreen("menu")} />}</div>
      </div>
      <HiddenScreen
        justify="flex-start"
        insertBlock={menuBlock}
        isVisible={hiddenScreensStatus.menu}
        handleScreenStatus={() => handleHiddenScreen("menu")}
      />
      <HiddenScreen
        justify="center"
        insertBlock={<FormOrder />}
        isVisible={hiddenScreensStatus.form}
        handleScreenStatus={() => handleHiddenScreen("form")}
      />
    </header>
  );
};

export default Header;
