import * as prismic from "@prismicio/client";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";

import { Bounded } from "./Bounded";

export function Footer({ navigation, settings }) {
	return (
		<Bounded as='footer' yPadding='sm' className=' bg-zinc-800 text-white'>
			<div className='grid gap-8 md:flex md:justify-between'>
				<div>
					<div className='font-semibold text-current'>ENDEREÇO</div>

					{navigation.data?.address.map((item) => (
						<div className='font-semibold text-current'>
							<PrismicNextLink field={item.link}>
								<PrismicText field={item.address} />
								<br></br>
								<PrismicText field={item.city} />
								<br></br>
								<PrismicText field={item.zipcode} />
								<br></br>
							</PrismicNextLink>
						</div>
					))}
				</div>
				<div>
					<div className='font-semibold text-current'>CONTATOS</div>
					{navigation.data?.contacts.map((item) => (
						<div className='font-semibold'>
							<a href={item.link}>
								<PrismicText field={item.label} />
								<PrismicText field={item.text} />
							</a>
						</div>
					))}

					{navigation.data?.socialmedia.map((item) => (
						<div className='object-contain  font-semibold text-current transition duration-200 ease-in-out hover:text-zinc-400'>
							<PrismicNextLink field={item.link}>
								<PrismicText field={item.text} />
							</PrismicNextLink>
						</div>
					))}
				</div>
				<div>
					<PrismicNextLink
						href='/'
						className='text-xl font-semibold tracking-tight'
					>
						<div className='grid justify-items-center'>
							<PrismicNextImage
								field={navigation.data.logo}
								className='flex h-14 w-auto justify-items-center   md:h-20'
							/>
						</div>
					</PrismicNextLink>
				</div>
			</div>
			<div className='flex justify-center pt-24 text-sm font-bold'>
				© 2023 DESPACHANTE LEAL
			</div>
		</Bounded>
	);
}
