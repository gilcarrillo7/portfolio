import React, { useContext } from "react";
import { Trans } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useI18next } from "gatsby-plugin-react-i18next";

import Paragraph from "../shared/Paragraph";
import AppContext from "../../context/AppContext";
import Button from "../shared/Button";

import Img from "../../images/gilberto.jpg";

const About = () => {
	const { darkMode } = useContext(AppContext);
	const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
	const { language } = useI18next();

	const skills = [
		"Javascript",
		"Typescript",
		"React",
		"Angular",
		"Gatsby",
		"Next JS",
		"Redux",
		"Node JS",
		"Wordpress",
	];

	return (
		<div
			id="about"
			className={`w-screen sm:h-screen flex items-center justify-center ${
				darkMode ? "bg-maindark" : "bg-mainlight"
			}`}
		>
			<div ref={ref} className={`container flex justify-center`}>
				<div className="flex lg:w-3/4 flex-col sm:flex-row">
					<div
						className={`relative sm:order-2 sm:w-1/2 flex items-center justify-center mb-6 sm:mb-0`}
					>
						<div
							className={`w-3/4 h-3/4 border-2 absolute z-0 ${
								darkMode ? "border-mainlight" : "border-maindark"
							} transition-all duration-700 delay-500 ease-in-out ${
								inView
									? "opacity-100 right-0 -top-6 xl:-top-12"
									: "opacity-0 right-12 top-12"
							}`}
						></div>
						<img
							alt="Gilberto Carrillo Profile Pic"
							className={`w-3/4 z-10 transition-all duration-700 delay-300 ease-in-out ${
								inView ? "opacity-100" : "opacity-0"
							}`}
							src={Img}
						/>
					</div>
					<div className={`sm:w-1/2 sm:order-1`}>
						<div className="flex">
							<Paragraph darkMode={darkMode} className={`text-2xl sm:text-3xl`}>
								<Trans>About Me</Trans>
							</Paragraph>
							<div className={`flex items-center flex-grow ml-6`}>
								<div
									className={`${inView ? "w-full" : "w-0"} ${
										darkMode ? "border-mainlight" : "border-maindark"
									} border-b transition-all duration-1000 delay-100 ease-in-out`}
								></div>
							</div>
						</div>
						<Paragraph
							darkMode={darkMode}
							className={`my-4 text-justify sm:text-lg font-thin`}
						>
							<Trans>textabout</Trans>
						</Paragraph>
						<div className="flex">
							<Paragraph darkMode={darkMode} className={`text-2xl sm:text-3xl`}>
								Skills
							</Paragraph>
							<div className={`flex items-center flex-grow ml-6`}>
								<div
									className={`${inView ? "w-full" : "w-0"} ${
										darkMode ? "border-mainlight" : "border-maindark"
									} border-b transition-all duration-1000 delay-300 ease-in-out`}
								></div>
							</div>
						</div>
						<div className="flex mt-4">
							<ul className="w-full list-disc pl-4 grid grid-cols-3 gap-x-3">
								{skills.map((skill) => (
									<li
										key={skill}
										className={`font-light ${
											darkMode ? "text-mainlight" : "text-maindark"
										}`}
									>
										{skill}
									</li>
								))}
							</ul>
						</div>
						<div className="mt-8 flex gap-4">
							<Button
								darkMode={darkMode}
								className={` transition-all duration-1000 delay-700 ease-in-out ${
									inView ? "opacity-100" : "scale-0 opacity-0"
								}`}
								onClick={() =>
									window.open(
										language === "es"
											? "https://drive.google.com/file/d/1EWgVAHDU-aWz1nvLW3P8hj8jRc4YXon2/view?usp=sharing"
											: "https://drive.google.com/file/d/1hjqbWVoEPy1aGAO1qkVBB5qLL87IwR3w/view?usp=sharing"
									)
								}
								type={"button"}
							>
								<Trans>Resume</Trans>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
