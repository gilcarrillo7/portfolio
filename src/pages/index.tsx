import React, { useContext, useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Layout from "./components/layout/Layout";
import ReactScrollWheelHandler from "react-scroll-wheel-handler";
import { graphql } from "gatsby";
import { SEO } from "./components/shared/SEO";
import { AppContext } from "./context/AppContext";
import Helmet from "react-helmet";
import Presentation from "./components/home/Presentation";
import PageIcon from "./components/shared/PageIcon";
import About from "./components/home/About";
import Contact from "./components/home/Contact";
import { useWindowSize } from "./hooks/useWindowSize";
import Work from "./components/home/Work";

const IndexPage = () => {
	const { width: windowWidth } = useWindowSize();

	const { darkMode } = useContext(AppContext);
	const [active, setActive] = useState(1);

	useEffect(() => {
		if (windowWidth && windowWidth > 640)
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
				className=""
				upHandler={() => setActive(active === 1 ? 1 : active - 1)}
				downHandler={() => setActive(active === 4 ? 4 : active + 1)}
			>
				<Element name="element1">
					<Presentation setActive={setActive} />
				</Element>
				<Element name="element2">
					<About />
				</Element>
				<Element name="element3">
					<Work />
				</Element>
				<Element name="element4">
					<Contact />
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
