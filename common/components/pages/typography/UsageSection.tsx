import CodeCopyButton from '@/ui/buttons/CopyButton';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { nord } from "react-syntax-highlighter/dist/cjs/styles/hljs";


const UsageSection = () => {
	const code = `<p className='heading-1'>The quick brown fox</p>`;
	return (
		<div className='py-8'>
			<h2 className='text-3xl font-bold'>Usage</h2>
			<div className='py-2'>
				<p>For using heading styles simply add the respective class in your text style.</p>
				<div className="mt-4 relative border dark:border-zinc-700 rounded-md overflow-x-auto">
					<CodeCopyButton textToCopy={code}/>
					<SyntaxHighlighter
						language='jsx'
						showLineNumbers={false}
						style={nord}
						customStyle={{
							padding: "20px",
							backgroundColor: "#27272a"
						}}
					>
						{code}
					</SyntaxHighlighter>
				</div>
			</div>
		</div>
	);
};
 
export default UsageSection;