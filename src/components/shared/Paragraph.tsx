import React from "react";

const Paragraph = ({ darkMode, className, children }) => (
	<p className={`${darkMode ? "text-secdark" : "text-seclight"} ${className}`}>
		{children}
	</p>
);

export default Paragraph;
