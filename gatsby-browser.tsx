import { AppProvider } from "./src/pages/context/AppContext";
import "./src/styles/global.scss";
import React from "react";

export const wrapRootElement = ({ element }) => (
	<AppProvider>{element}</AppProvider>
);
