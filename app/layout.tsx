import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title>Acme Next.js</title>
				<meta
					name="description"
					content="A breif description of the page content."
				></meta>
				<meta property="og:title" content="Page Title"></meta>
				<meta property="og:description" content="Page Description"></meta>
				<meta property="og:image" content="imgage_url"></meta>
				<link rel="icon" href="/vercel.svg"></link>
			</head>
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
