import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Code } from "../shared/icons";
import { Link } from "gatsby";

const Logo = () => {
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
					className={`rounded-md transition duration-150 ease-linear p-2 ${
						darkMode ? "bg-secdark" : "bg-seclight"
					}`}
				>
					<Code darkMode={!darkMode} />
				</div>
			</div>
			<div className="ml-2 text-xl">
				GIL <span className="font-thin">CARRILLO</span>
			</div>
		</Link>
	);
};

export default Logo;
