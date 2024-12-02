import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { useState } from "react";
import { Menu, X, ChevronDown, MapPin } from "lucide-react";

export function Header({ navigation }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	return (
		<header className='relative z-50'>
			{/* Top Info Bar */}
			<div className='bg-yellow-500 px-6 py-2 text-zinc-800'>
				<div className='mx-auto grid max-w-6xl grid-flow-col items-center'>
					{/* Contact Info */}
					<ul className='hidden grid-flow-col items-center space-x-4 text-sm font-semibold lg:grid'>
						{navigation.data?.contacts.map((item) => (
							<li key={prismic.asText(item.label)}>
								<a
									href={item.href[0]?.text}
									className='transition-colors hover:text-zinc-700'
								>
									<PrismicText field={item.text} />
								</a>
							</li>
						))}
						{navigation.data?.address && (
							<li className='flex items-center space-x-2'>
								<MapPin className='h-4 w-4 text-zinc-700' />
								<span>
									<PrismicText field={navigation.data.address[0]?.address} /> -{" "}
									<PrismicText field={navigation.data.address[0]?.city} />
								</span>
							</li>
						)}
					</ul>

					{/* Social Media Icons */}
					<div className='grid grid-flow-col justify-end gap-4'>
						{navigation.data?.socialmedia.map((item) => (
							<PrismicNextLink
								key={prismic.asText(item.text)}
								field={item.link}
								className='transition-transform hover:scale-110'
								aria-label={`Follow us on ${prismic.asText(item.text)}`}
							>
								<PrismicNextImage
									field={item.icon}
									className='h-6 w-6 object-contain'
									alt={`${prismic.asText(item.text)} icon`}
								/>
							</PrismicNextLink>
						))}
					</div>
				</div>
			</div>

			{/* Main Navigation */}
			<div className='bg-zinc-800 text-white'>
				<div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
					{/* Logo */}
					<PrismicNextLink href='/' aria-label='Home'>
						<PrismicNextImage
							field={navigation.data.logo}
							className='h-12 w-auto object-contain md:h-16'
							alt='Logo'
						/>
					</PrismicNextLink>

					{/* Desktop Navigation */}
					<nav className='hidden md:block'>
						<ul className='flex space-x-6'>
							{navigation.data?.links.map((item) => (
								<li key={prismic.asText(item.label)}>
									<PrismicNextLink
										field={item.link}
										className='font-semibold text-white transition-all hover:text-yellow-500'
									>
										<PrismicText field={item.label} />
									</PrismicNextLink>
								</li>
							))}
						</ul>
					</nav>

					{/* Mobile Menu Toggle */}
					<button
						onClick={toggleMobileMenu}
						className='text-white focus:outline-none md:hidden'
						aria-label='Toggle mobile menu'
					>
						{isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMobileMenuOpen && (
				<div className='absolute left-0 top-full w-full bg-zinc-800 shadow-lg md:hidden'>
					<ul className='flex flex-col divide-y divide-zinc-700'>
						{navigation.data?.links.map((item) => (
							<li key={prismic.asText(item.label)}>
								<PrismicNextLink
									field={item.link}
									className='block px-6 py-4 text-white hover:bg-zinc-700'
								>
									<PrismicText field={item.label} />
								</PrismicNextLink>
							</li>
						))}
					</ul>
				</div>
			)}
		</header>
	);
}
