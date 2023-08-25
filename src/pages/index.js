import Head from "next/head";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices/";
import { Layout } from "@/components/Layout";

// Create a new instance of the Index component
const Index = ({ page, navigation, settings }) => {
	// Return the Layout component with the navigation and settings props
	return (
		<Layout navigation={navigation} settings={settings}>
			<Head>
				<title>{prismic.asText(page.data.title)}</title>
			</Head>
			<SliceZone slices={page.data.slices} components={components} />
		</Layout>
	);
};

// Export the Index component as a static page
export default Index;

// Get the page, navigation and settings from the server
export async function getStaticProps({ locale, previewData }) {
	// Create a new instance of the Prismic client
	const client = createClient({ previewData });

	// Get the page, navigation and settings from the server
	const page = await client.getByUID("page", "home", { lang: locale });
	const navigation = await client.getSingle("navigation", { lang: locale });
	const settings = await client.getSingle("settings", { lang: locale });

	// Return the props for the static page
	return {
		props: {
			page,
			navigation,
			settings,
		},
	};
}
