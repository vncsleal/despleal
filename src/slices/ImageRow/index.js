import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const ImageRow = ({ slice }) => {
	const [duplicatedItems, setDuplicatedItems] = useState([]);
	const containerRef = useRef(null);

	useEffect(() => {
		if (!slice.items || slice.items.length === 0) return;

		const baseItems = slice.items;
		const totalWidth = baseItems.length * 200; // Estimated width of images
		const repeatCount = Math.ceil(window.innerWidth / totalWidth) + 2;

		const newDuplicatedItems = Array(repeatCount)
			.fill(null)
			.flatMap(() => baseItems);
		setDuplicatedItems(newDuplicatedItems);
	}, [slice.items]);

	return (
		<AnimatedSection>
			<Bounded as='section' className='bg-white'>
				<div className='container mx-auto px-6 py-6'>
					{/* Section Title */}
					{prismic.isFilled.richText(slice.primary.title) && (
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6 }}
							className='mb-24'
						>
							<Heading size='md' className='text-center text-zinc-800'>
								<PrismicText field={slice.primary.title} />
							</Heading>
						</motion.div>
					)}

					{/* Infinite Sliding Carousel */}
					<div ref={containerRef} className='relative w-full overflow-hidden'>
						{/* Fade gradient overlays */}
						<div className='pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent'></div>
						<div className='pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent'></div>

						{/* Image Row */}
						<motion.div
							className='flex'
							animate={{
								x: ["0%", "-200%"],
							}}
							transition={{
								ease: "linear",
								duration: 60, // Smooth scrolling duration
								repeat: Infinity,
							}}
						>
							{duplicatedItems.map((item, index) => (
								<motion.div
									key={`${item.image?.url}-${index}`}
									className='group flex-shrink-0 px-4'
									whileHover={{ scale: 1.05 }}
								>
									{prismic.isFilled.image(item.image) && (
										<PrismicNextLink field={item.link} className='block'>
											<PrismicNextImage
												field={item.image}
												className='h-24 w-48 object-contain 
                          opacity-60 grayscale 
                          transition-all duration-300 
                          ease-in-out group-hover:opacity-100 group-hover:grayscale-0'
												alt={item.image.alt || "Image"}
											/>
										</PrismicNextLink>
									)}
								</motion.div>
							))}
						</motion.div>
					</div>
				</div>
			</Bounded>
		</AnimatedSection>
	);
};

export default ImageRow;
