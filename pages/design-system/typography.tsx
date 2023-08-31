import SideBarLayout from '@/components/ui/layouts/SidebarLayout';
import Card from '@/ui/cards/Card';
import Head from 'next/head';

const DesignSystem = () => {
	return (
		<>
			<Head>
				<title>Hello UI- Design System</title>
				<meta name="description" content="Hello UI Design System" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<SideBarLayout>
				<Card>
					<Card.Content>
						<div>
							<h1 className='text-4xl font-bold'>Typography</h1>
							<div className='py-4'>
								<p>Use typography to present your design and content as clearly and efficiently as possible.</p>
							</div>
						</div>
						<div className='py-4'>
							<h1 className='text-3xl font-bold'>General</h1>
							<div className='py-2'>
								<p>We use <b>Inter</b> as default font, but you can also select your own font depending on your brand! For more advanced configuration, check out the theme customization section.</p>
							</div>
						</div>
						<div className='py-4'>
							<h1 className='text-3xl font-bold'>Font size</h1>
							<div className='py-2'>
								<p>We use the font size rules defined by default by <b>Tailwindcss</b></p>
							</div>
						</div>
					</Card.Content>
				</Card>
			</SideBarLayout>
		</>
	);
};
 
export default DesignSystem;