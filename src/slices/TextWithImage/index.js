import * as prismic from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { motion } from "framer-motion";

import { Heading } from "@/components/Heading";
import { Bounded } from "@/components/Bounded";
import AnimatedSection from "@/components/AnimatedSection";

const TextWithImage = ({ slice }) => {
	const { image, title, text, uid } = slice.primary || {};
	const isImageLeft = slice.variation === "imageLeft";

	return (
		<AnimatedSection>
			<Bounded
				as='section'
				className='bg-gradient-to-r from-yellow-500 to-amber-500 text-zinc-800'
			>
				<div
					id={uid?.[0]?.text || ""}
					className='container mx-auto px-6 py-12 md:px-12'
				>
					{/* Section Title */}
					{prismic.isFilled.richText(title) && (
						<motion.div
							initial={{ opacity: 0, y: -30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, ease: "easeInOut" }}
							className='mb-24'
						>
							<Heading size='lg' className='text-center text-zinc-900'>
								<PrismicRichText field={title} />
							</Heading>
						</motion.div>
					)}

					{/* Content Grid */}
					<div className='grid grid-cols-1 items-center gap-16 md:grid-cols-2'>
						{/* Image Section */}
						{prismic.isFilled.image(image) && (
							<motion.div
								className={`relative overflow-hidden rounded-lg shadow-2xl ${
									isImageLeft ? "md:order-1" : "md:order-2"
								}`}
								initial={{ opacity: 0, x: isImageLeft ? -50 : 50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
								whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
							>
								<PrismicNextImage
									field={image}
									sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
									className='h-auto w-full object-cover'
								/>
								<div className='absolute inset-0 bg-gradient-to-r from-transparent to-white/30' />
							</motion.div>
						)}

						{/* Text Section */}
						{prismic.isFilled.richText(text) && (
							<motion.div
								className={`text-lg leading-relaxed ${
									isImageLeft ? "md:order-2" : "md:order-1"
								}`}
								initial={{ opacity: 0, x: isImageLeft ? 50 : -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
							>
								<div className='text-zinc-900'>
									<PrismicRichText field={text} />
								</div>
							</motion.div>
						)}
					</div>
				</div>
			</Bounded>
		</AnimatedSection>
	);
};

export default TextWithImage;
