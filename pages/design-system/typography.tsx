import Head from 'next/head';
import SideBarLayout from '@/components/ui/layouts/SidebarLayout';
import SizesSection from '@/components/pages/typography/SizesSection';
import HeadingSection from '@/components/pages/typography/HeadingSection';
import UsageSection from '@/components/pages/typography/UsageSection';

const DesignSystem = () => {
	return (
		<>
			<Head>
				<title>Hello UI- Design System</title>
				<meta name="description" content="Hello UI Design System" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<SideBarLayout>
				<div className="max-w-4xl mx-auto">
					<div>
						<h1 className='text-4xl font-bold'>Typography</h1>
						<div className='py-4'>
							<p>Use typography to present your design and content as clearly and efficiently as possible.</p>
						</div>
					</div>
					<div className='py-4'>
						<h2 className='text-3xl font-bold'>General</h2>
						<div className='py-2'>
							<p>We use <b>Inter</b> as default font, but you can also select your own font depending on your brand! For more advanced configuration, check out the theme customization section.</p>
						</div>
					</div>
					<SizesSection/>
					<HeadingSection/>
					<UsageSection/>
				</div>
			</SideBarLayout>
		</>
	);
};
 
export default DesignSystem;