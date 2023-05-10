import React, { useContext, useState, useEffect, useCallback } from "react";
import { Element, scroller } from "react-scroll";
import Layout from "./components/layout/Layout";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { useInView } from "react-intersection-observer";
import { graphql } from "gatsby";
import { SEO } from "./components/shared/SEO";
import { AppContext } from "./context/AppContext";
import Paragraph from "./components/shared/Paragraph";
import { Trans } from "gatsby-plugin-react-i18next";
import Helmet from "react-helmet";
import Presentation from "./components/home/Presentation";
import PageIcon from "./components/shared/PageIcon";
import About from "./components/home/About";

const IndexPage = () => {
	const { darkMode } = useContext(AppContext);
	const [active, setActive] = useState(1);

	useEffect(() => {
		scroller.scrollTo(`element${active}`, {
			duration: 200,
			delay: 20,
			smooth: true,
		});
	}, [active]);

	return (
		<Layout>
			<Helmet
				bodyAttributes={{
					class: `sm:overflow-hidden`,
				}}
			/>
			<ReactScrollWheelHandler
				className="pointer-events-none sm:pointer-events-auto"
				upHandler={(e) => setActive(active === 1 ? 1 : active - 1)}
				downHandler={(e) => setActive(active === 4 ? 4 : active + 1)}
			>
				<Element name="element1">
					<Presentation />
				</Element>
				<Element name="element2">
					<About />
				</Element>
				<Element name="element3">
					<div
						className={`w-screen h-screen flex items-center justify-center ${
							darkMode ? "bg-maindark" : "bg-mailight"
						}`}
					>
						<p className="text-white">ayos</p>
					</div>
				</Element>
				<Element name="element4">
					<div
						className={`w-screen h-screen flex items-center justify-center ${
							darkMode ? "bg-maindark" : "bg-mailight"
						}`}
					>
						<p className="text-white">bay</p>
					</div>
				</Element>
			</ReactScrollWheelHandler>
			<div className="hidden sm:flex fixed bottom-4 sm:bottom-8 right-4 sm:right-8 flex-col gap-3 items-center">
				<PageIcon
					darkMode={darkMode}
					active={active === 1}
					onClick={() => setActive(1)}
				/>
				<PageIcon
					darkMode={darkMode}
					active={active === 2}
					onClick={() => setActive(2)}
				/>
				<PageIcon
					darkMode={darkMode}
					active={active === 3}
					onClick={() => setActive(3)}
				/>
				<PageIcon
					darkMode={darkMode}
					active={active === 4}
					onClick={() => setActive(4)}
				/>
			</div>
		</Layout>
	);
};

export const Head = () => <SEO />;

export default IndexPage;

export const query = graphql`
	query ($language: String!) {
		locales: allLocale(filter: { language: { eq: $language } }) {
			edges {
				node {
					ns
					data
					language
				}
			}
		}
	}
`;
