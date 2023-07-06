/**
 * @typedef {import("@prismicio/client").Content.ImageRowSlice} ImageRowSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageRowSlice>} ImageRowProps
 * @param {ImageRowProps}
 */
import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";

const ImageCard = ({ item }) => {
	const image = item.image;
	const link = item.link;

	return (
		<li className='grid'>
			<PrismicNextLink href={link}>
				{prismic.isFilled.image(image) && (
					<div className=''>
						<PrismicNextImage
							field={image}
							className='h-60 w-60 object-contain '
						/>
					</div>
				)}
			</PrismicNextLink>
		</li>
	);
};
const ImageRow = ({ slice }) => {
	return (
		<Bounded as='section' className='bg-white text-zinc-800'>
			<div className='grid gap-12'>
				{prismic.isFilled.richText(slice.primary.title) && (
					<Heading size='md' className='text-center'>
						<PrismicText field={slice.primary.title} />
					</Heading>
				)}
				<ul className='grid grid-flow-col grid-rows-2 items-center md:grid-rows-1 '>
					{slice.items.map((item) => (
						<ImageCard key={item.image.url} item={item} />
					))}
				</ul>
			</div>
		</Bounded>
	);
};

export default ImageRow;
