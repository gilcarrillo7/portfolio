import * as React from "react";
import Layout from "./components/layout/Layout";
import { graphql } from "gatsby";
import { SEO } from "./components/shared/SEO";

const IndexPage = () => {
	return <Layout>{}</Layout>;
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
