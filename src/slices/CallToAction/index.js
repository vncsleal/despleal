/**
 * @typedef {import("@prismicio/client").Content.CallToActionSlice} CallToActionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CallToActionSlice>} CallToActionProps
 * @param {CallToActionProps}
 */
import * as prismic from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react"; // Icon library

import { Bounded } from "@/components/Bounded";
import AnimatedSection from "@/components/AnimatedSection";

const buttonVariants = {
	hover: { scale: 1.05, transition: { duration: 0.2 } },
	tap: { scale: 0.95 },
};

const CallToAction = ({ slice }) => {
	const { text, buttonlink, buttontext, uid } = slice.primary || {};

	return (
		<AnimatedSection>
			<Bounded
				as='section'
				className='relative overflow-hidden bg-gradient-to-r from-yellow-500 to-amber-500'
			>
				<div
					id={uid?.[0]?.text || ""}
					className='relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-20 text-center md:flex-row md:text-left'
				>
					{/* Gradient Overlay */}
					<div className='absolute inset-0 bg-transparent'></div>

					{/* Text Content */}
					{prismic.isFilled.richText(text) && (
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='z-20 max-w-3xl text-3xl font-bold text-white'
						>
							<PrismicRichText field={text} />
						</motion.div>
					)}

					{/* Call to Action Button */}
					{prismic.isFilled.link(buttonlink) && (
						<motion.div
							initial={{ opacity: 0, x: 30 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
							className='z-20'
						>
							<PrismicNextLink
								field={buttonlink}
								className='group relative inline-block'
								aria-label={buttontext || "Call to Action"}
							>
								<motion.div
									variants={buttonVariants}
									whileHover='hover'
									whileTap='tap'
									className='flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-yellow-600 shadow-lg transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-yellow-300 group-hover:bg-yellow-700 group-hover:pr-10 group-hover:text-white'
								>
									{buttontext || "Learn More"}
									<ChevronRight
										className='absolute right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
										size={20}
									/>
								</motion.div>
							</PrismicNextLink>
						</motion.div>
					)}
				</div>
			</Bounded>
		</AnimatedSection>
	);
};

export default CallToAction;
