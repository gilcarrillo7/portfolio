import { Trans } from "gatsby-plugin-react-i18next";
import React from "react";

const Input = ({ type, darkMode, placeholder, className }) => {
	return (
		<div className={`relative z-0 ${className}`}>
			<input
				type={type}
				id={placeholder}
				className={`block py-2.5 px-0 w-full text-lg sm:text-xl border-0 border-b-2 bg-transparent appearance-none dark:focus:border-thirddark focus:outline-none focus:ring-0 focus:border-thirddark peer ${
					darkMode
						? "dark:text-mainlight dark:border-mainlight"
						: "dark:text-maindark dark:border-maindark"
				}`}
				placeholder=" "
			/>
			<label
				htmlFor={placeholder}
				className={`absolute text-base sm:text-lg duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-thirddark peer-focus:dark:text-thirddark peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8 ${
					darkMode ? "dark:text-mainlight" : "dark:text-maindark"
				}`}
			>
				<Trans>{placeholder}</Trans>
			</label>
		</div>
	);
};

export default Input;
