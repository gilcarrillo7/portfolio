import React from "react";

import PostImg from "../../images/post.jpg";

interface IProps {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
}

const SEO = ({
	title = "Gil Carrillo | Front End Developer",
	description = "Hello my name is Gilberto Carrillo. I am a Front End Developer with experience in Javascript, React and Angular. Here are some examples of my work.",
	image = PostImg,
	url = "",
}: IProps) => {
	return (
		<>
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<meta property="og:url" content={`https://www.gilcarrillo.dev${url}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
			<meta property="og:image:secure_url" content={image} />
			<meta property="og:image:type" content="image/png" />
			<meta property="og:description" content={description} />
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:url" content={url} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<title>{title}</title>
		</>
	);
};

export default SEO;
