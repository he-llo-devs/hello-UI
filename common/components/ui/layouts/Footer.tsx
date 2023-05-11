import { HeartIcon } from "lucide-react";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="c-footer">
			<p>© {year} he-llo.  Todos los derechos reservados</p>
			<HeartIcon className="text-primary"/>
		</div>
	);
};
 
export default Footer;