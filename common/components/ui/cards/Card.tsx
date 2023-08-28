import { ReactNode, FC } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

const Card: FC<Props> = ({
	className = '',
	children,
}) => {
	return ( 
		<div className={`rounded-lg bg-white dark:bg-gray-800 shadow-sm shadow-transparent/5 w-full ${className}`}>
			{children}
		</div>
	);
};
 
export default Card;