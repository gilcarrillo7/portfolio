import { AppProvider } from "./src/context/AppContext";
import "./src/styles/global.scss";
import React from "react";

export const wrapRootElement = ({ element }) => (
	<AppProvider>{element}</AppProvider>
);
