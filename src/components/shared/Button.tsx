import React from "react";

const Button = ({ darkMode, className, onClick, type, children }) => {
	return (
		<button
			className={`text-xl sm:text-2xl w-full sm:w-auto px-12 py-1 font-light ${
				darkMode
					? "bg-mainlight hover:bg-mainlight"
					: "bg-maindlight hover:bg-maindark border-2 border-maindark"
			} ${className} btn relative inline-flex items-center justify-start overflow-hidden transition-all rounded group`}
			onClick={onClick}
			type={type}
		>
			<span className="w-0 h-full rounded bg-thirddark absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
			<span
				className={`w-full transition-colors duration-300 ease-in-out z-10 ${
					darkMode
						? "text-maindark group-hover:text-maindark"
						: "text-maindark group-hover:text-maindark"
				}`}
			>
				{children}
			</span>
		</button>
	);
};

export default Button;
