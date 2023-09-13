import { CheckIcon, CopyIcon } from "lucide-react";
import { useState } from "react";

interface Props {
	textToCopy?: string;
	className?: string;
}

const CodeCopyButton = ({textToCopy = '', className = ''}: Props) => {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(textToCopy);
		setIsCopied(true);
		setTimeout(() => {
			setIsCopied(false);
		}, 2000);
	};

	return (
		<button onClick={handleCopy} className={`absolute z-10 top-0 right-0 m-4 p-2 hover:bg-zinc-700 rounded-md transition-colors ${className}`}>
			{isCopied 
				? <CheckIcon size="18" className="text-white"/> 
				: <CopyIcon size="18" className="text-white"/>
			}
		</button>
	);
};
 
export default CodeCopyButton;