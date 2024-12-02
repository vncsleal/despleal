import * as prismic from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";
import { motion } from "framer-motion";
import { ChevronRight, ChevronDown } from "lucide-react";

/** Prismic Rich Text Components for Custom Rendering */
const components = {
	heading1: ({ children }) => (
		<Heading as='h2' size='xl' className='mb-4 mt-12 first:mt-0 last:mb-0'>
			{children}
		</Heading>
	),
};

const Hero = ({ slice }) => {
	const { backgroundImage, text, subtitle, buttonLink, buttonText } =
		slice.primary;

	const textVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	};

	const buttonVariants = {
		hover: { scale: 1.05, transition: { duration: 0.2 } },
		tap: { scale: 0.95 },
	};

	return (
		<section className='relative h-[86vh] overflow-hidden bg-zinc-900 text-white'>
			{/* Background Image */}
			{prismic.isFilled.image(backgroundImage) && (
				<motion.div
					initial={{ scale: 1 }}
					animate={{ scale: 1.05 }}
					transition={{
						duration: 10,
						repeat: Infinity,
						repeatType: "reverse",
					}}
					className='absolute inset-0'
				>
					<PrismicNextImage
						field={backgroundImage}
						alt=''
						fill
						className='pointer-events-none w-full select-none object-cover opacity-40'
					/>
				</motion.div>
			)}

			{/* Gradient Overlay */}
			<div className='absolute inset-0 bg-gradient-to-b from-zinc-800/70 to-zinc-800/90'></div>

			{/* Centered Content */}
			<div className='relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:px-12'>
				{/* Title */}
				<motion.div
					variants={textVariants}
					initial='hidden'
					animate='visible'
					className='max-w-4xl'
				>
					<motion.div
						className='mb-6 text-3xl font-bold md:text-6xl'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<PrismicRichText field={text} components={components} />
					</motion.div>

					{/* Subtitle */}
					<motion.div
						className='mx-auto max-w-2xl text-base font-medium text-zinc-300 md:text-xl'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<PrismicRichText field={subtitle} />
					</motion.div>
				</motion.div>

				{/* CTA Button */}
				{prismic.isFilled.link(buttonLink) && (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.6 }}
						className='mt-6'
					>
						<PrismicNextLink
							field={buttonLink}
							className='group relative inline-block'
						>
							<motion.div
								variants={buttonVariants}
								whileHover='hover'
								whileTap='tap'
								className='flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 font-bold text-zinc-900 transition-transform duration-300 group-hover:pr-10'
							>
								{buttonText || "Learn More"}
								<ChevronRight
									className='absolute right-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100'
									size={20}
								/>
							</motion.div>
						</PrismicNextLink>
					</motion.div>
				)}
			</div>

			{/* Scroll Down Chevron */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, delay: 1 }}
				className='relative bottom-8  flex transform items-center justify-center'
			>
				<a href='#next-section' aria-label='Scroll Down'>
					<ChevronDown
						size={32}
						className='animate-bounce text-white/70 transition-transform duration-300 hover:translate-y-2 hover:text-white'
					/>
				</a>
			</motion.div>
		</section>
	);
};

export default Hero;
