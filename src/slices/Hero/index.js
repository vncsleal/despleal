import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

/** @type {import("@prismicio/react").PrismicRichTextProps['components']} */
const components = {
	heading1: ({ children }) => (
		<Heading as='h2' size='xl' className='mb-4 mt-12 first:mt-0 last:mb-0'>
			{children}
		</Heading>
	),
};

const Hero = ({ slice }) => {
	const backgroundImage = slice.primary.backgroundImage;

	return (
		<section className='relative bg-slate-900 text-white'>
			{prismic.isFilled.image(backgroundImage) && (
				<PrismicNextImage
					field={backgroundImage}
					alt=''
					fill={true}
					className='pointer-events-none w-full select-none object-cover opacity-60'
				/>
			)}
			<Bounded yPadding='lg' className='relative'>
				<div className='grid justify-items-center gap-8'>
					<div className='max-w-2xl text-center text-3xl font-bold md:text-6xl'>
						<PrismicRichText
							field={slice.primary.text}
							components={components}
						/>
					</div>
					<div className='text-center text-base font-bold'>
						<PrismicRichText field={slice.primary.subtitle} />
					</div>
					{prismic.isFilled.link(slice.primary.buttonLink) && (
						<PrismicNextLink
							field={slice.primary.buttonLink}
							className=' bg-yellow-500 px-5 py-3 text-base font-bold text-gray-800 md:text-lg'
						>
							{slice.primary.buttonText || "Learn More"}
						</PrismicNextLink>
					)}
				</div>
			</Bounded>
		</section>
	);
};

export default Hero;
