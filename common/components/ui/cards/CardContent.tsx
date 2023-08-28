import { ReactNode, FC } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

const CardContent: FC<Props> = ({children, className}) => {
	return (  
		<div className={`p-5 ${className || ''}`}>
			{children}
		</div>
	);
};
 
export default CardContent;