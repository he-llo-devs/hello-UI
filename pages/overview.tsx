import SideBarLayout from '@/components/ui/layouts/SidebarLayout';
import Head from 'next/head';

const Overview = () => {
	return (
		<>
			<Head>
				<title>Hello UI</title>
				<meta name="description" content="Hello UI main page" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<SideBarLayout>
				<p>Hola</p>
			</SideBarLayout>
		</>
	);
};
 
export default Overview;