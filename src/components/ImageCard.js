import * as prismic from "@prismicio/client";
import { PrismicText, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";

const ImageCard = ({ item, index }) => {
	const { image, text, content } = item;

	return (
		<motion.li
			initial={{ opacity: 0, y: 50 }}
			whileInView={{
				opacity: 1,
				y: 0,
				transition: {
					duration: 0.6,
					delay: index * 0.1,
				},
			}}
			viewport={{ once: true }}
			className='group relative overflow-hidden rounded-lg bg-white shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl'
		>
			{/* Card Image */}
			{prismic.isFilled.image(image) && (
				<div className='relative h-64 w-full overflow-hidden'>
					<PrismicNextImage
						field={image}
						fill
						className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
						alt={image.alt || "Image Card"}
					/>
				</div>
			)}

			{/* Card Content */}
			<div className='p-6'>
				{/* Title */}
				<h3 className='mb-4 text-center text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-yellow-500'>
					<PrismicText field={text} />
				</h3>

				{/* Description */}
				<div className='text-center text-base text-gray-600'>
					<PrismicRichText field={content} />
				</div>
			</div>

			{/* Hover Overlay */}
			<div className='absolute inset-0 bg-yellow-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-50'></div>
		</motion.li>
	);
};

export default ImageCard;
