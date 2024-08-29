"use client";

// import cancel from "../image/cancel.png";
import { FC, useState } from "react";

interface IHiddenScreenProps {
  justify: string;
  insertBlock: any;
  isVisible: boolean;
  handleScreenStatus: Function;
}

const HiddenScreen: FC<IHiddenScreenProps> = ({ justify, insertBlock, isVisible, handleScreenStatus = () => {} }) => {
  return (
    <div className="active-screen universal-hidden-screen" style={{ display: !isVisible ? "none" : "flex", justifyContent: justify }}>
      <div className="universal-hidden-screen__background" onClick={() => handleScreenStatus()}></div>
      {insertBlock}
    </div>
  );
};

export default HiddenScreen;
