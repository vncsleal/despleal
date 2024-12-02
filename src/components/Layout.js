// components/Layout.js
import { Header } from "./Header";
import { Footer } from "./Footer";
import AnimatedSection from "./AnimatedSection";

export function Layout({ navigation, settings, children }) {
	return (
		<div className='text-zinc-800'>
			<Header navigation={navigation} settings={settings} />
			<AnimatedSection>
				<main>{children}</main>
			</AnimatedSection>
			<Footer navigation={navigation} settings={settings} />
		</div>
	);
}
