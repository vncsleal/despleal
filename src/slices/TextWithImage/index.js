import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

import { Heading } from "@/components/Heading";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const TextWithImage = ({ slice }) => {
	const image = slice.primary.image;

	return (
		<Bounded id={slice.primary.uid} as='section' className='bg-yellow-500'>
			<div className='grid gap-12'>
				<div>
					{prismic.isFilled.richText(slice.primary.title) && (
						<Heading size='md' className='text-center'>
							<PrismicRichText field={slice.primary.title} />
						</Heading>
					)}
				</div>

				<div>
					{slice.variation == "imageLeft" ? (
						<div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
							<div>
								{prismic.isFilled.image(image) && (
									<div className=''>
										<PrismicNextImage
											field={image}
											sizes='100vw'
											className='h-auto w-full object-cover '
										/>
									</div>
								)}
							</div>
							<div className='font-bold'>
								<PrismicRichText field={slice.primary.text} />
							</div>{" "}
						</div>
					) : (
						<div className='grid grid-cols-1 items-center gap-8 md:grid-cols-2'>
							<div className='font-bold'>
								<PrismicRichText field={slice.primary.text} />
							</div>
							<div>
								{prismic.isFilled.image(image) && (
									<div className=''>
										<PrismicNextImage
											field={image}
											sizes='100vw'
											className='h-auto w-full object-cover '
										/>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</Bounded>
	);
};

export default TextWithImage;
