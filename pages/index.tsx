import SideBarLayout from '@/components/ui/layouts/SidebarLayout';
import Head from 'next/head';

export default function Home() {
	return (
		<>
			<Head>
				<title>Hello UI</title>
				<meta name="description" content="Hello UI main page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<SideBarLayout>
				
			</SideBarLayout>
		</>
	);
}
