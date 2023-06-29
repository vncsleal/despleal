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
						<div className='font-semibold  text-current'>
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
						<div>
							<PrismicNextImage
								field={navigation.data.logo}
								className='h-20 w-auto object-contain'
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
