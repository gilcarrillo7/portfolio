import React, { useContext } from "react";
import { Trans } from "react-i18next";
import { useInView } from "react-intersection-observer";

import Paragraph from "../shared/Paragraph";
import { AppContext } from "../../context/AppContext";
import Button from "../shared/Button";
import Input from "../shared/Input";
import Textarea from "../Textarea";

const Contact = () => {
	const { darkMode } = useContext(AppContext);
	const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
	const { ref: refMail, inView: inViewMail } = useInView({
		threshold: 0.3,
	});

	return (
		<div
			id="about"
			className={`w-screen sm:h-screen relative flex flex-col items-center justify-center ${
				darkMode ? "bg-maindark" : "bg-mailight"
			}`}
		>
			<div
				ref={ref}
				className={`container flex justify-center mt-24 sm:mt-0 mb-6 sm:mb-0`}
			>
				<div
					className={`flex w-full lg:w-3/4 flex-col items-center transition-all duration-1000 ease-in-out ${
						inView ? "opacity-100" : "opacity-0"
					}`}
				>
					<Paragraph
						darkMode={darkMode}
						className={`text-2xl sm:text-3xl font-medium transition-all duration-1000 ease-in-out ${
							inView ? "" : "-translate-y-12"
						}`}
					>
						<Trans>Let's Talk</Trans>
					</Paragraph>
					<form className="w-full mt-12">
						<div className="flex flex-col sm:flex-row gap-8">
							<div className="sm:w-1/2">
								<Input
									type="text"
									className={``}
									darkMode={darkMode}
									placeholder="Name"
								/>
							</div>
							<div className="sm:w-1/2">
								<Input
									type="mail"
									className={``}
									darkMode={darkMode}
									placeholder="Mail"
								/>
							</div>
						</div>
						<div className="w-full">
							<Textarea
								className={`mt-12`}
								darkMode={darkMode}
								placeholder="Message"
							/>
						</div>
						<div className="flex justify-center my-12">
							<Button
								darkMode={darkMode}
								className={``}
								onClick={undefined}
								type={"submit"}
							>
								Submit
							</Button>
						</div>
					</form>
				</div>
			</div>
			<div
				ref={refMail}
				className={`absolute bottom-0 left-0 w-full text-center py-2 font-thin ${
					darkMode ? "text-mainlight" : "text-maindark"
				}`}
			>
				<Trans>or send me a</Trans>{" "}
				<a
					href="mailto:gilcarrillo7@gmail.com"
					className="relative inline-block"
					target="_blank"
				>
					<Trans>mail</Trans>
					<div
						className={`border-b bottom-0 transition-all duration-1000 ease-in-out ${
							darkMode ? "border-mainlight" : "border-maindark"
						} ${inViewMail ? "w-full" : "w-0"}`}
					></div>
				</a>
			</div>
		</div>
	);
};

export default Contact;
