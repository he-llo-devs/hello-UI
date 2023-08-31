import { ReactNode } from "react";

interface Props {
	children: ReactNode;
	className?: string;
}

const Card = ({className, children}: Props) => {
	return ( 
		<div className={`c-card ${className}`}>
			{children}
		</div>
	);
};

const Content = ({className, children}: Props) => {
	return (  
		<div className={`c-card-content ${className}`}>
			{children}
		</div>
	);
};

const defaultProps = {
	className: ''
};

Card.defaultProps = defaultProps;
Content.defaultProps = defaultProps;

Card.Content = Content;

export default Card;