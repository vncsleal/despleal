import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { ConditionalWrap } from "@/components/ConditionalWrap";
import { PrismicRichText } from "@/components/PrismicRichText";

const ImageCard = ({ item }) => {
	const image = item.image;

	return (
		<li className='grid gap-8 px-4 py-8 shadow'>
			<div>
				{prismic.isFilled.image(image) && (
					<div className=''>
						<PrismicNextImage field={image} className='object-contain' />
					</div>
				)}
				<div className='grid gap-4'>
					<div className='text-center font-bold'>
						<PrismicRichText field={item.text} />
					</div>
					<div className='font-base'>
						<PrismicRichText field={item.content} />
					</div>
				</div>
			</div>
			<div></div>
		</li>
	);
};

const ImageCards = ({ slice }) => {
	return (
		<Bounded as='section' className='bg-white text-zinc-800'>
			<div id={slice.primary.uid} className='grid gap-12'>
				{prismic.isFilled.richText(slice.primary.heading) && (
					<Heading size='md' className='text-center'>
						<PrismicText field={slice.primary.heading} />
					</Heading>
				)}
				<ul className='grid grid-cols-1 items-stretch gap-8 md:grid-cols-3'>
					{slice.items.map((item) => (
						<ImageCard key={item.image.url} item={item} />
					))}
				</ul>
			</div>
		</Bounded>
	);
};

export default ImageCards;
