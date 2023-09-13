import Tab from '@/ui/tabs/Tab';
import HeadingsExample from './HeadingsExample';
import CodeCopyButton from '@/ui/buttons/CopyButton';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";


const HeadingSection = () => {
	const code = `const HeadingsExample = () => {
        return (
            <>
                <div className='flex items-baseline space-x-4'>
                    <p className='font-bold'>heading-1</p>
                    <p>36px</p>
                    <p className='heading-1 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
                </div>
                <div className='flex items-baseline space-x-4'>
                    <p className='font-bold'>heading-2</p>
                    <p>30px</p>
                    <p className='heading-2 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
                </div>
                <div className='flex items-baseline space-x-4'>
                    <p className='font-bold'>heading-3</p>
                    <p>24px</p>
                    <p className='heading-3 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
                </div>
                <div className='flex items-baseline space-x-4'>
                    <p className='font-bold'>heading-4</p>
                    <p>20px</p>
                    <p className='heading-4 whitespace-nowrap md:overflow-hidden'>The quick brown fox</p>
                </div>
            </>
        );
    };
     
    export default HeadingsExample;`;
    
	return (
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
 
export default HeadingSection;