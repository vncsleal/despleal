import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body className='overflow-x-hidden bg-zinc-800 antialiased'>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
