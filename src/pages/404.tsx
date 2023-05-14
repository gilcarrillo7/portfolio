import React, { useContext } from "react";
import Layout from "./components/layout/Layout";
import Paragraph from "./components/shared/Paragraph";
import { AppContext } from "./context/AppContext";
import { Link, graphql } from "gatsby";
import { Trans } from "gatsby-plugin-react-i18next";

const NotFoundPage = () => {
	const { darkMode } = useContext(AppContext);
	return (
		<Layout>
			<div
				className={`w-screen h-screen flex items-center justify-center ${
					darkMode ? "bg-maindark" : "bg-mainlight"
				}`}
			>
				<Paragraph darkMode={darkMode} className={`text-center`}>
					<Trans>Sorry 😔, there is nothing here.</Trans>
					<br /> <Trans>Go to</Trans>{" "}
					<Link to="/" className="underline">
						<Trans>home</Trans>
					</Link>
					.
				</Paragraph>
			</div>
		</Layout>
	);
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

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
