import Head from 'next/head';

import HeadingsExample from '@/components/pages/typography/HeadingsExample';
import TypoExample from '@/components/pages/typography/TypoExample';
import SideBarLayout from '@/components/ui/layouts/SidebarLayout';
import CodeCopyButton from '@/ui/buttons/CopyButton';
import Tab from '@/ui/tabs/Tab';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const DesignSystem = () => {
	const code = `const TypoExample = () => {
		return (
			<>
				<div className='flex items-baseline space-x-4'>
					<p>12px</p>
					<p className='text-xs whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>14px</p>
					<p className='text-sm whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>16px</p>
					<p className='text-base whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>18px</p>
					<p className='text-lg whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>20px</p>
					<p className='text-xl whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>24px</p>
					<p className='text-2xl whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>30px</p>
					<p className='text-3xl whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>36px</p>
					<p className='text-4xl whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>48px</p>
					<p className='text-5xl whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>60px</p>
					<p className='text-6xl whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
				<div className='flex items-baseline space-x-4'>
					<p>72px</p>
					<p className='text-7xl whitespace-nowrap md:overflow-hidden'>The quick brown fox jumps over the lazy dog</p>
				</div>
			</>
		);
	};
	 
	export default TypoExample;`;

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
					<div className='py-4'>
						<h2 className='text-3xl font-bold'>Font size</h2>
						<div className='pt-2 pb-8'>
							<p>We use the font size rules defined by default by <b>Tailwindcss</b> and the <b>Refactoring UI guidelines</b></p>
						</div>
						<Tab.Group style='minimal'>
							<Tab.List>
								<Tab>Preview</Tab>
								<Tab>Code</Tab>
							</Tab.List>
							<Tab.Panels className='border rounded-lg dark:border-zinc-700'>
								<Tab.Panel className='p-8 space-y-4 overflow-x-auto'>
									<TypoExample/>
								</Tab.Panel>
								<Tab.Panel>
									<div className="relative border dark:border-zinc-700 rounded-md overflow-x-auto">
										<CodeCopyButton textToCopy={code}/>
										<SyntaxHighlighter
											language='jsx'
											showLineNumbers={true}
											style={nord}
											customStyle={{
												paddingTop: "20px",
												backgroundColor: "#27272a"
											}}
										>
											{code}
										</SyntaxHighlighter>
									</div>
								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
					</div>
					<div className='py-8'>
						<h2 className='text-3xl font-bold'>Headings</h2>
						<div className='pt-2 pb-8'>
							<p>For a more consistent design we define our headings as custom classes according to this scale with added weight</p>
							<p className='italic'>Note: They are independent from the <b>h1</b>, <b>h2</b>, <b>h3</b> and <b>h4</b> tags.</p>
						</div>
						<Tab.Group style='minimal'>
							<Tab.List>
								<Tab>Preview</Tab>
								<Tab>Code</Tab>
							</Tab.List>
							<Tab.Panels >
								<Tab.Panel className='border dark:border-zinc-700 p-8 space-y-4 overflow-x-auto'>
									<HeadingsExample/>
								</Tab.Panel>
								<Tab.Panel>

								</Tab.Panel>
							</Tab.Panels>
						</Tab.Group>
						
					</div>
				</div>
			</SideBarLayout>
		</>
	);
};
 
export default DesignSystem;