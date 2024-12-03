import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { motion } from "framer-motion";
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Instagram,
	Twitter,
	Linkedin,
} from "lucide-react";
import { Bounded } from "./Bounded";

const AddressItem = ({ item }) => (
	<div className='mb-4 flex items-start'>
		<MapPin className='mr-3 h-5 w-5 flex-shrink-0 text-yellow-500' />
		<div className='text-sm text-white/90'>
			<PrismicText field={item.address} />
			<br />
			<PrismicText field={item.city} />
			<br />
			<PrismicText field={item.zipcode} />
		</div>
	</div>
);

const ContactItem = ({ item }) => {
	// Explicitly check if the label is "Email" (case-insensitive)
	const IconComponent =
		item.label?.[0]?.text?.toLowerCase() === "email" ? Mail : Phone;

	return (
		<div className='mb-4 flex items-center'>
			<IconComponent className='mr-3 h-5 w-5 flex-shrink-0 text-yellow-500' />
			<a
				href={item.link}
				target='_blank'
				rel='noopener noreferrer'
				aria-label={`Contact via ${item.label?.[0]?.text}`}
				className='text-sm font-medium text-white/90 transition-colors duration-200 hover:text-yellow-500'
			>
				<PrismicText field={item.text} />
			</a>
		</div>
	);
};

const SocialMediaItem = ({ item }) => {
	const platform = item.text?.[0]?.text?.toLowerCase();
	const icons = {
		facebook: Facebook,
		instagram: Instagram,
		twitter: Twitter,
		linkedin: Linkedin,
	};
	const IconComponent = icons[platform];
	return (
		IconComponent && (
			<PrismicNextLink
				field={item.link}
				aria-label={`Follow us on ${item.text}`}
				className='text-white/90 transition-all duration-200 hover:scale-110 hover:text-yellow-500'
			>
				<IconComponent className='h-6 w-6' />
			</PrismicNextLink>
		)
	);
};

export function Footer({ navigation, settings }) {
	const {
		address = [],
		contacts = [],
		socialmedia = [],
		logo,
		description,
	} = navigation.data || {};

	return (
		<Bounded as='footer' yPadding='sm' className='bg-zinc-800 text-white'>
			<div className='px-4'>
				<div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-24'>
					{/* Left Section - Logo */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true, amount: 0.1 }}
						className='text-center md:text-left'
					>
						<PrismicNextLink
							href='/'
							aria-label='Home'
							className='mb-4 inline-block'
						>
							<PrismicNextImage
								field={logo}
								className='h-16 w-auto object-contain'
							/>
						</PrismicNextLink>
					</motion.div>

					{/* Middle Section - Contacts and Address */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true, amount: 0.1 }}
					>
						<h3 className='mb-6 text-center text-xl font-bold text-yellow-500 md:text-left'>
							Contatos
						</h3>
						<div className='flex flex-col items-center md:items-start'>
							{contacts.map((item, index) => (
								<ContactItem key={index} item={item} />
							))}
							{address.map((item, index) => (
								<AddressItem key={index} item={item} />
							))}
						</div>
					</motion.div>

					{/* Right Section - Social Media */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true, amount: 0.1 }}
						className='flex flex-col items-center md:items-start'
					>
						<h3 className='mb-6 text-center text-xl font-bold text-yellow-500'>
							Redes Sociais
						</h3>
						<div className='flex space-x-6'>
							{socialmedia.map((item, index) => (
								<SocialMediaItem key={index} item={item} />
							))}
						</div>
					</motion.div>
				</div>

				{/* Copyright Section */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					viewport={{ once: true, amount: 0.1 }}
					className='mt-12 flex items-center justify-center border-t border-zinc-700 pt-8 text-sm text-white/60'
				>
					© 2024 Despachante Leal. Todos os direitos reservados.
				</motion.div>
			</div>
		</Bounded>
	);
}
