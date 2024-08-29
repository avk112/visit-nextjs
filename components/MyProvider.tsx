"use client";

import { FC, ReactNode } from "react";
import { store } from "../redux/store";
import { Provider } from "react-redux";

interface IMyProviderProps {
  children: ReactNode;
}

const MyProvider: FC<IMyProviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MyProvider;
