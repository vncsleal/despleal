import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "./PrismicRichText";

import { Bounded } from "./Bounded";

export function Header({ navigation, settings }) {
	console.log(JSON.stringify(navigation.data.contacts[0].href[0].text));
	return (
		<div>
			<div className='bg-yellow-500 px-6 py-2 text-zinc-800 '>
				<div className='grid grid-flow-col items-center'>
					<ul className='hidden grid-flow-col items-center justify-between text-sm font-semibold lg:grid'>
						{navigation.data?.contacts.map((item) => (
							<li key={prismic.asText(item.label)} className=' '>
								<a href={item.href[0].text}>
									<PrismicText field={item.text} />
								</a>
							</li>
						))}
						<li>
							<PrismicText field={navigation.data.address[0].address} /> -{" "}
							<PrismicText field={navigation.data.address[0].city} />
						</li>
					</ul>
					<div className='grid grid-flow-col items-center justify-center gap-6 lg:justify-end'>
						{navigation.data?.socialmedia.map((item) => (
							<div
								key={prismic.asText(item.text)}
								className='h-6 w-6 object-contain'
							>
								<PrismicNextLink field={item.link}>
									<PrismicNextImage field={item.icon} />
								</PrismicNextLink>
							</div>
						))}
					</div>
				</div>
			</div>

			<Bounded as='header' yPadding='sm' className='bg-zinc-800 text-white'>
				<div className='grid grid-flow-row items-center justify-items-center gap-x-6 gap-y-8 md:grid-flow-col md:justify-between md:gap-y-3 '>
					<PrismicNextLink
						href='/'
						className='text-xl font-semibold tracking-tight'
					>
						<div>
							<PrismicNextImage
								field={navigation.data.logo}
								className='h-14 w-auto object-contain  md:h-20'
							/>
						</div>
					</PrismicNextLink>
					<nav>
						<ul className='grid grid-flow-col justify-items-center gap-8 md:gap-10'>
							{navigation.data?.links.map((item) => (
								<li
									key={prismic.asText(item.label)}
									className='font-semibold tracking-tight text-current'
								>
									<PrismicNextLink field={item.link}>
										<PrismicText field={item.label} />
									</PrismicNextLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</Bounded>
		</div>
	);
}
