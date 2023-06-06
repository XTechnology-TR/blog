import Head from "next/head";
import Container from "../components/container";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import { getAllPostsForHome } from "../lib/api";
import { GetStaticProps } from "next";

export default function Index({ allPosts: { edges }, preview }) {
	const heroPost = edges[0]?.node;
	const morePosts = edges.slice(1);

	return (
		<Layout {...preview}>
			<Head>
				<title>{heroPost.title}</title>
			</Head>
			<Container>
				<Intro />
				{heroPost && (
					<HeroPost
						title={heroPost.title}
						coverImage={heroPost.featuredImage}
						date={heroPost.date}
						author={heroPost.author}
						slug={heroPost.slug}
						excerpt={heroPost.excerpt}
					/>
				)}
				{morePosts.length > 0 && <MoreStories posts={morePosts} />}
			</Container>
		</Layout>
	);
}

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
	const allPosts = await getAllPostsForHome(preview);

	return {
		props: { allPosts, preview },
		revalidate: 20,
	};
};
