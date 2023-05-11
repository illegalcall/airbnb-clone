import RegisterModal from './components/organisms/Modal/RegisterModal';
import './globals.css';
import { Nunito } from 'next/font/google';
import { ToasterProvider } from './providers';
import LoginModal from './components/organisms/Modal/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import { Navbar } from './components/organisms';
import RentModal from './components/organisms/Modal/RentModal';
import SearchModal from './components/organisms/Modal/SearchModal';
import type { Metadata } from 'next';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Airbnb',
	description:
		'Airbnb clone made using Next.js and TailwindCSS',
	icons: {
		icon: './airbnb-logo.svg',
	},
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const currentUser = await getCurrentUser();

	return (
		<html lang='en'>
			<body className={nunito.className}>
				<ToasterProvider />
				<RegisterModal />
				<LoginModal />
				<RentModal />
				<SearchModal />
				<Navbar currentUser={currentUser} />
				<div className='pb-20 pt-28'>{children}</div>
			</body>
		</html>
	);
}
