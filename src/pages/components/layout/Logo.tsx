import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Code } from "../shared/icons";
import { Link } from "gatsby";

const Logo = ({ scrolled, open }) => {
	const { darkMode } = useContext(AppContext);
	return (
		<Link
			to="/"
			className={`group flex items-center font-normal transition duration-150 ease-linear ${
				darkMode ? "text-secdark" : "text-seclight"
			}`}
		>
			<div className="">
				<div
					className={`rounded-md transition duration-500 ease-linear p-2 ${
						darkMode ? "bg-secdark" : "bg-seclight"
					} ${
						!open && scrolled
							? "scale-50 md:scale-100 -translate-x-4 md:translate-x-0 -translate-y-6 md:translate-y-0"
							: ""
					}`}
				>
					<Code darkMode={!darkMode} />
				</div>
			</div>
			<div
				className={`ml-2 text-xl transition duration-500 ease-linear ${
					scrolled ? "opacity-0 -translate-y-20" : "opacity-100"
				} ${open ? "opacity-100 translate-y-0" : ""}`}
			>
				GIL <span className="font-thin">CARRILLO</span>
			</div>
		</Link>
	);
};

export default Logo;
