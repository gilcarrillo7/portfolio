import React, { useContext, useState, useRef, useEffect } from "react";
import { scroller } from "react-scroll";
import Logo from "./Logo";
import { AppContext } from "../../context/AppContext";
import {
	Trans,
	useI18next,
	Link as LinkTrans,
} from "gatsby-plugin-react-i18next";
import { Github, Linkedin, Light } from "../shared/icons";
import Hamburger from "./Hamburger";

const Divisor = ({ darkMode }) => (
	<div
		className={`w-full h-[1px] my-2 ${darkMode ? "bg-secdark" : "bg-seclight"}`}
	></div>
);

const NavItem = ({ text, darkMode, onClick }) => {
	return (
		<li
			className={`cursor-pointer ${
				darkMode ? "text-secdark" : "text-seclight"
			}`}
			onClick={onClick}
		>
			<Trans>{text}</Trans>
		</li>
	);
};

const Header = () => {
	const { darkMode, setDarkMode } = useContext(AppContext);
	const { language, changeLanguage } = useI18next();

	const menu = useRef<HTMLDivElement>(null);

	const [open, setOpen] = useState(false);

	const hanldeScroll = (index) => {
		scroller.scrollTo(`element${index}`, {
			duration: 200,
			delay: 20,
			smooth: true,
		});
	};

	const handleClickOutside = (e) => {
		if (menu.current && !menu.current.contains(e.target)) {
			setOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<header
			className={`fixed w-full top-0 z-50 ${
				darkMode ? "bg-maindark" : "bg-mainlight"
			}`}
		>
			<nav
				className={`container py-6 flex justify-between border-b border-maindark`}
			>
				<Logo />
				<div ref={menu} className="relative">
					<Hamburger open={open} setOpen={setOpen} />

					<div
						className={`fixed sm:absolute flex w-screen sm:w-[300px] top-[5.5rem] sm:top-16 right-0  border text-2xl sm:text-xl transition-all duration-300 ease-in-out ${
							darkMode
								? "bg-maindark border-mainlight"
								: "bg-mainlight border-maindark"
						} ${
							open
								? "h-screen sm:h-[300px] pt-20 sm:pt-6 p-4 sm:p-8"
								: "w-0 h-0 invisible"
						}`}
					>
						<div className="flex flex-col w-full gap-5 sm:gap-3 items-center sm:items-end">
							<ul
								className={`font-thin flex flex-col items-center sm:items-end gap-4 sm:gap-2 ${
									open ? "" : "invisible"
								}`}
							>
								<NavItem
									text={"About"}
									darkMode={darkMode}
									onClick={() => hanldeScroll(2)}
								/>
								<NavItem
									text={"Work"}
									darkMode={darkMode}
									onClick={() => hanldeScroll(3)}
								/>
								<NavItem
									text={"Contact"}
									darkMode={darkMode}
									onClick={() => hanldeScroll(4)}
								/>
							</ul>
							<Divisor darkMode={darkMode} />
							<div className={`flex gap-6 sm:gap-4 ${open ? "" : "invisible"}`}>
								<Github darkMode={darkMode} />
								<Linkedin darkMode={darkMode} />
							</div>
							<Divisor darkMode={darkMode} />
							<ul
								className={`font-thin flex items-center gap-6 sm:gap-4 ${
									open ? "" : "invisible"
								}`}
							>
								<li
									className={`${darkMode ? "text-secdark" : "text-seclight"}`}
								>
									<LinkTrans
										to=""
										onClick={(e) => {
											e.preventDefault();
											changeLanguage(language === "es" ? "en" : "es");
										}}
									>
										{language === "es" ? "ENG" : "ESP"}
									</LinkTrans>
								</li>
								<li
									className=""
									onClick={() => {
										localStorage.setItem("mode", darkMode ? "false" : "true");
										setDarkMode(!darkMode);
									}}
								>
									<Light darkMode={darkMode} />
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
