import React, { useContext } from "react";
import AppContext from "../../context/AppContext";

const Hamburger = ({
	open,
	setOpen,
	scrolled,
}: {
	open: boolean;
	setOpen: (open: boolean) => void;
	scrolled: boolean;
}) => {
	const { darkMode } = useContext(AppContext);
	return (
		<div
			className={`flex flex-col gap-3 items-end cursor-pointer transition-all duration-500 ease-in-out ${
				!open && scrolled
					? "scale-50 md:scale-100 translate-x-4 md:translate-x-0 -translate-y-6 md:translate-y-0"
					: ""
			}`}
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
