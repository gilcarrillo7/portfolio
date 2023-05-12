import React, { useContext } from "react";
import { Trans } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { scroller } from "react-scroll";

import Paragraph from "../shared/Paragraph";
import { AppContext } from "../../context/AppContext";
import Button from "../shared/Button";

const Presentation = () => {
	const { darkMode } = useContext(AppContext);
	const { ref, inView } = useInView({ threshold: 0.3 });

	return (
		<div
			id="home"
			className={`w-screen h-screen flex items-center justify-center ${
				darkMode ? "bg-maindark" : "bg-mailight"
			}`}
		>
			<div ref={ref} className={`container text-center`}>
				<Paragraph
					darkMode={darkMode}
					className={`text-2xl sm:text-3xl font-light transition-all duration-500 ease-in-out ${
						inView ? "opacity-100" : "translate-y-16 opacity-0"
					}`}
				>
					<Trans>Hello!</Trans>
				</Paragraph>
				<Paragraph
					darkMode={darkMode}
					className={`text-2xl sm:text-3xl font-light transition-all duration-500 ease-in-out ${
						inView ? "opacity-100" : "translate-y-16 opacity-0"
					}`}
				>
					<Trans>I am Gilberto Carrillo</Trans>
				</Paragraph>
				<Paragraph
					darkMode={darkMode}
					className={`text-4xl sm:text-5xl font-semibold my-4 transition-all duration-1000 delay-500 ease-in-out ${
						inView ? "opacity-100" : "scale-0 opacity-0"
					}`}
				>
					<Trans>Front end Developer</Trans>
				</Paragraph>
				<Paragraph
					darkMode={darkMode}
					className={`text-2xl sm:text-3xl font-normal transition-all duration-1000 delay-1000 ease-in-out ${
						inView ? "opacity-100" : "-translate-y-16 opacity-0"
					}`}
				>
					<Trans>Passionate about programming web experiences</Trans>
				</Paragraph>
				<Button
					type="button"
					darkMode={darkMode}
					className={`mt-8 transition-all duration-1000 delay-1000 ease-in-out ${
						inView ? "opacity-100" : "scale-0 opacity-0"
					}`}
					onClick={() =>
						scroller.scrollTo(`element3`, {
							duration: 200,
							delay: 20,
							smooth: true,
						})
					}
				>
					<Trans>Work</Trans>
				</Button>
			</div>
		</div>
	);
};

export default Presentation;
