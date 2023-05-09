import RegisterModal from './components/organisms/Modal/RegisterModal';
import './globals.css';
import { Nunito } from 'next/font/google';
import { ToasterProvider } from './providers';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
	title: 'Airbnb',
	description: 'Airbnb clone',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={nunito.className}>
				<ToasterProvider />
				<RegisterModal />
				<div className=''>{children}</div>
			</body>
		</html>
	);
}
