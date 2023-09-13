import TypoExample from '@/components/pages/typography/TypoExample';
import CodeCopyButton from '@/ui/buttons/CopyButton';
import Tab from '@/ui/tabs/Tab';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";


const SizesSection = () => {
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
	);
};
 
export default SizesSection;