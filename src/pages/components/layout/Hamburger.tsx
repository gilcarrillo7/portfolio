import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const Hamburger = ({
	open,
	setOpen,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
}) => {
	const { darkMode } = useContext(AppContext);
	return (
		<div
			className={`flex flex-col gap-3 items-end cursor-pointer`}
			onClick={() => setOpen(!open)}
		>
			<span
				className={`block w-12 h-1 transition-all duration-300 ease-in-out ${
					darkMode ? "bg-secdark" : "bg-seclight"
				}  ${open ? "rotate-45 translate-y-4" : ""}`}
			></span>
			<span
				className={`block h-1 transition-all duration-100 ease-linear ${
					darkMode ? "bg-secdark" : "bg-seclight"
				} ${open ? "w-0" : "w-10"}`}
			></span>
			<span
				className={`block h-1 transition-all duration-500 ease-in-out ${
					darkMode ? "bg-secdark" : "bg-seclight"
				}  ${open ? "w-12 -rotate-45 -translate-y-4" : "w-8"}`}
			></span>
		</div>
	);
};

export default Hamburger;
