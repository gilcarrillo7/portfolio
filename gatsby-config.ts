const path = require("path");

const gatsbyRequiredRules = path.join(
	process.cwd(),
	"node_modules",
	"gatsby",
	"dist",
	"utils",
	"eslint-rules"
);

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-sass",
		"gatsby-plugin-react-helmet",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/favicon.png",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/locales`,
				name: `locale`,
			},
		},
		{
			resolve: `gatsby-plugin-react-i18next`,
			options: {
				localeJsonSourceName: `locale`,
				languages: [`en`, `es`],
				defaultLanguage: `en`,
				siteUrl: `https://gilcarrillo.dev`,
				// if you are using trailingSlash gatsby config include it here, as well (the default is 'always')
				trailingSlash: "always",
				// you can pass any i18next options
				i18nextOptions: {
					interpolation: {
						escapeValue: false, // not needed for react as it escapes by default
					},
					keySeparator: false,
					nsSeparator: false,
				},
			},
		},
		{
			resolve: "gatsby-plugin-eslint",
			options: {
				// Gatsby required rules directory
				rulePaths: [gatsbyRequiredRules],
				// Default settings that may be omitted or customized
				stages: ["develop"],
				extensions: ["js", "jsx", "ts", "tsx"],
				exclude: ["node_modules", "bower_components", ".cache", "public"],
				// Any additional eslint-webpack-plugin options below
				// ...
			},
		},
	],
};
