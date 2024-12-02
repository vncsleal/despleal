import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { motion } from "framer-motion";
import ImageCard from "@/components/ImageCard";
import AnimatedSection from "@/components/AnimatedSection";

const ImageCards = ({ slice }) => {
	const { heading, uid } = slice.primary || {};
	const { items } = slice || [];

	return (
		<AnimatedSection>
			<Bounded as='section' className='bg-gray-50 text-gray-800'>
				<div
					id={uid?.[0]?.text || ""}
					className='container mx-auto px-6 py-6 md:px-0'
				>
					{/* Section Heading */}
					{prismic.isFilled.richText(heading) && (
						<motion.div
							initial={{ opacity: 0, y: -50 }}
							whileInView={{
								opacity: 1,
								y: 0,
								transition: { duration: 0.6 },
							}}
							viewport={{ once: true }}
							className='mb-24'
						>
							<Heading size='lg' className='text-center text-gray-800'>
								<PrismicText field={heading} />
							</Heading>
						</motion.div>
					)}

					{/* Image Cards Grid */}
					{Array.isArray(items) && items.length > 0 ? (
						<ul className='grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
							{items.map((item, index) => (
								<ImageCard
									key={`image-card-${index}`}
									item={item}
									index={index}
								/>
							))}
						</ul>
					) : (
						<p className='text-center text-gray-500'>No items to display.</p>
					)}
				</div>
			</Bounded>
		</AnimatedSection>
	);
};

export default ImageCards;
