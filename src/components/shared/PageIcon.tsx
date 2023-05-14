import React from "react";

const PageIcon = ({ darkMode, active, onClick }) => {
	return (
		<div
			className={`cursor-pointer transition-all duration-300 ease-in-out ${
				darkMode ? "border-mainlight" : "border-maindark"
			} ${
				active ? "w-4 h-4 border-2 rotate-45" : "w-3 h-3 border-4"
			}`}
			onClick={onClick}
		></div>
	);
};

export default PageIcon;
