import RegisterModal from './components/organisms/Modal/RegisterModal';
import './globals.css';
import { Nunito } from 'next/font/google';
import { ToasterProvider } from './providers';
import LoginModal from './components/organisms/Modal/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import { Navbar } from './components/organisms';
import RentModal from './components/organisms/Modal/RentModal';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
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
				<Navbar currentUser={currentUser} />
				<div className='pb-20 pt-28'>{children}</div>
			</body>
		</html>
	);
}
