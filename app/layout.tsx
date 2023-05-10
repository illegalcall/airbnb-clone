import RegisterModal from './components/organisms/Modal/RegisterModal';
import './globals.css';
import { Nunito } from 'next/font/google';
import { ToasterProvider } from './providers';
import LoginModal from './components/organisms/Modal/LoginModal';
import getCurrentUser from './actions/getCurrentUser';
import { Navbar } from './components/organisms';

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
				<Navbar currentUser={currentUser} />
				<div className=''>{children}</div>
			</body>
		</html>
	);
}
