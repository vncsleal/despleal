/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param {CallToActionProps}
 */
import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { PrismicRichText } from "@/components/PrismicRichText";

const CallToAction = ({ slice }) => {
	return (
		<Bounded as='section' className='bg-yellow-500'>
			<div
				id={slice.primary.uid[0].text}
				className='grid grid-flow-row items-center justify-center justify-items-center gap-8 md:grid-flow-col'
			>
				<div className='text-lg font-bold'>
					<PrismicRichText field={slice.primary.text} />
				</div>
				<div>
					{prismic.isFilled.link(slice.primary.buttonlink) && (
						<PrismicNextLink
							field={slice.primary.buttonlink}
							className=' bg-zinc-800 px-5 py-3 text-base text-lg font-bold text-white transition duration-200 ease-in-out hover:bg-zinc-700'
						>
							{slice.primary.buttontext || "Learn More"}
						</PrismicNextLink>
					)}
				</div>
			</div>
		</Bounded>
	);
};

export default CallToAction;
