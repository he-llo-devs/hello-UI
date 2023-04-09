import { HeartIcon } from "lucide-react";

const Footer = () => {
	const date = new Date();
	const year = date.getFullYear();

	return (
		<div className="px-5 md:px-10 h-14 flex justify-between items-center">
			<p>© { year } he-llo.  Todos los derechos reservados</p>
			<HeartIcon className="text-primary"/>
		</div>
	);
};
 
export default Footer;